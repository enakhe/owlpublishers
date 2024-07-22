import axios from 'axios';
const API_URL = 'api/articles/';

// Create new article
const createArticle = async (articleData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, articleData, config);
    return response.data;
};

const articleService = {
    createArticle
}

export default articleService;