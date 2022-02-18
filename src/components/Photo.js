import React from 'react';
import styled from 'styled-components';

const StyledPhotoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
`

const Photo = (props) =>{
    return(
        <StyledPhotoContainer className = "photoContainer">
            <h1>{props.photo.title}</h1>
            <p>{props.photo.date}</p>         
            <StyledImg src ={props.photo.hdurl} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </StyledPhotoContainer>
    )
}

export default Photo;