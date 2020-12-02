import React, { Component } from 'react';

class AddPhoto extends Component {

    //initializing 
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //handle onSubmit event
    //takes in the link from the submit event 
    //takes in the caption from the submit event 
    handleSubmit(event) {
        event.preventDefault();
        const imgUrl = event.target.elements.Link.value;
        const imgCaption = event.target.elements.Caption.value;
        const post = {
            id : Number(new Date()),
            description : imgCaption,
            imageLink  : imgUrl,
        };
        if (imgCaption && imgUrl){
            this.props.onAddPhoto(post)
        }
    }

    //render the image upload form 
    render(){
        return  (
        <div>
            <h1> Upload a new photo </h1>
            <div className ="form">
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder = "Link" name= "Link"/>
                    <input type = "text" placeholder = "Cation" name="Caption"/>
                    <button>Post</button>
                </form>
            </div>    
        </div>
        )
    }
}

export default AddPhoto 