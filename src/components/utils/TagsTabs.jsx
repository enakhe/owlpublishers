import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { tags } from '../../app/objects'

const TagsTabs = () => {
    const [tagValue, setTagValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTagValue(newValue);
    };

    return (
        <div className='center'>
            <Tabs  
                value={tagValue} 
                onChange={handleChange} 
                variant="scrollable" 
                scrollButtons
                allowScrollButtonsMobile 
                aria-label="scrollable auto tabs example"
                centered>
                {
                    tags.map((tag, index) => (
                        <Tab key={index} label={tag} sx={{ textTransform: "capitalize" }} />
                    ))
                }
            </Tabs>
        </div>
    )
}

export default TagsTabs