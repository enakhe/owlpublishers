import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';
// import LanguageIcon from '@mui/icons-material/Language';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import { formats, modules, styles } from '../../app/objects';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createArticle, reset } from '../../features/article/articleSlice';
import Spiner from '../utils/Spiner';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const TextEditor = () => {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState(localStorage.getItem('body'));

    const [formData, setFormData] = useState({
        title: localStorage.getItem('title'),
        description: localStorage.getItem('description'),
        body: localStorage.getItem('body')
    })
    console.log(formData);

    const [errors, setErrors] = useState({});
    const { title, description, body } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.articles);

    useEffect(() => {
        if (!user) {
            navigate('/signin')
        }

        if (isError) {
            console.log(message);
            toast.error(message);
        }

        if (isSuccess) {
            toast.success('Article saved successfully')
            navigate('/saved-article')
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const handleClose = () => {
        setOpen(false);
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        localStorage.setItem(e.target.name, e.target.value)
    };

    const validate = () => {
        let temp = {};
        temp.title = title !== "" ? "" : "Please enter the article title";
        temp.description = description !== "" ? "" : "Please enter the article description";
        temp.body = body !== "" ? "" : "Please enter the article body";
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
        const articleData = {
            title, description, body
        }
        console.log(articleData);
        dispatch(createArticle(articleData));
        localStorage.removeItem('title')
        localStorage.removeItem('description')
        localStorage.removeItem('body')
    };

    const autoSave = (value) => {
        if (value) {
            if (value.length > 0) {
                return localStorage.setItem('body', value);
            }
        }
    };

    return (
        <>
            <Dialog open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                disableEscapeKeyDown={true}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Article Fields</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Changes here will affect how your article appears in public
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        value={title}
                        name='title'
                        onChange={onChange} {...(errors.title && { error: true, helperText: errors.title })}
                        type="text"
                        fullWidth
                        sx={{ marginBottom: "1rem" }}
                        variant="outlined"
                    />

                    <TextField
                        id="description"
                        label="Description"
                        name='description'
                        value={description}
                        onChange={onChange} {...(errors.description && { error: true, helperText: errors.description })}
                        multiline
                        fullWidth
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>

            <div className="top-150">
                <div className="container">
                    <Button sx={{ marginBottom: '1rem' }} onClick={onSubmit} variant="contained" color="success" endIcon={<BookmarkIcon />}>
                        Save
                    </Button>
                    <ReactQuill theme="snow" placeholder='Write your story...' value={value} style={styles} onKeyPress={autoSave(value)} onChange={setValue} modules={modules} formats={formats} />
                    {
                        isLoading ? <Spiner /> : ""
                    }
                </div>
            </div>
        </>
    )
}

export default TextEditor