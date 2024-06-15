import React from 'react';

const NewsCard = ({news}) => {
    const {title,cover,subtitle,tags,date} = news ;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default NewsCard;