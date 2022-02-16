import React from 'react';

const Photo = (props) =>{
    return(
        <div className = "photoContainer">
            <h1>{props.photo.title}</h1>
            <p>{props.photo.date}</p>         
            <img src ={props.photo.hdurl} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default Photo;