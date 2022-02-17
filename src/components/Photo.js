import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`


const Photo = (props) =>{
    return(
        <StyledPhoto className = "photoContainer">
            <h1>{props.photo.title}</h1>
            <p>{props.photo.date}</p>         
            <img src ={props.photo.hdurl} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </StyledPhoto>
    )
}

export default Photo;