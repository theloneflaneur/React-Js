import React, { Component } from  'react';
import Photos from './photos';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
/* implementing Photowall using stateless function */


function Photowall(props){ 
        return <div>
                    <Link className =  "addIcon"  to = "/AddPhoto"></Link>
                    {/*<button onClick = {props.onNavigate} className = "addIcon"></button> */}
                    <div className = "photoGrid">  
                        {props.posts
                        .sort(function(x,y)   {
                            return y.id - x.id 
                        })
                        .map((posts, index) => <Photos key = {index} posts = {posts} onRemovePhoto = {props.onRemovePhoto}  />)}
                    </div>
                </div>
};


//Prop types maintains a log of all the props used and their correct types and flags in case of an error
//.isRequired mandates a types 

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
};

export default Photowall