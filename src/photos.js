import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* implementing the photos as a stateless function*/
function Photos(props){
    const post = props.posts
    return <figure className = "figure"> 
                <img className = "photo" src = {post.imageLink} alt = {post.description} />
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className = "button-container">
                <button onClick = { () => {
                    props.onRemovePhoto(post)
                }}> Remove  </button>
                </div>
            </figure>
};

//Assigning a prop type 

Photos.propTypes = {
    post : PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
};



export default Photos