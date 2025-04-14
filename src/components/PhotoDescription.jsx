import React from 'react';

const PhotoDescription = (props) => {
    return (
        <div style={descriptionStyle}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Width: {props.width}</p>
            <p>Height: {props.height}</p>
            <p>Likes: {props.likes}</p>
        </div>
    );
};

const descriptionStyle = {
    position: 'relative',
    bottom: '10px',
    zIndex: -1,
    color: '#000000',
    backgroundColor: '#f8d4d4',
    padding: '5px',
    borderRadius: '12px',
    fontSize: '18px',
    fontFamily: 'roboto, sans-serif',
    fontWeigth: 22,
    border: '1px inside #000000',
}

export default PhotoDescription;