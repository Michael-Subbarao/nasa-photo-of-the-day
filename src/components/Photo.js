import React from 'react';
import styled from 'styled-components';

const StyledPhotoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f6fafb;
`

const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
`

const StyledTitle = styled.h1`
    color: #5e6668;
`

const Photo = (props) =>{
    return(
        <StyledPhotoContainer className = "photoContainer">
            <StyledTitle>{props.photo.title}</StyledTitle>
            <p>{props.photo.date}</p>         
            <StyledImg src ={props.photo.hdurl} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </StyledPhotoContainer>
    )
}

export default Photo;