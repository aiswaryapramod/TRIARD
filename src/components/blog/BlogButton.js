import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogButton({ url }) {
    const navigate = useNavigate();
    return (
        <button className='blog_3_btn' onClick={() => navigate(url)}>Read More</button>
    );
}

export default BlogButton;