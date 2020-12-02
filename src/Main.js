import React, {Component} from 'react' 
import Title from './Title'
import Photowall from './photowall'
import AddPhoto from './addphoto'
import {Route} from 'react-router-dom'

   


class Main extends Component {
    /*providing a connstructor method  for state updation*/
    constructor(){
        super()
        this.state =  { 
            posts : [
                {
                id: 0,
                description: "Zeus",
                imageLink: "https://images.unsplash.com/photo-1606155409052-782c35d737eb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80"                }, {
                id: 1,
                description: "Snow",
                imageLink: "https://images.unsplash.com/photo-1582403609737-a34c5fc4daa6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                }, {
                id: 2,
                description: "A sky full of dreams",
                imageLink: "https://images.unsplash.com/photo-1605388862319-eaf1649edb5a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"  
                }
            ],
        }
    this.removePhoto = this.removePhoto.bind(this); //this is for event binding
    }


    /*to remove a particular photo and update state */
    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) =>( {
            posts: state.posts.filter(post => post !== postRemoved)
        }
        ))
    }
    
    //updates the state for the image uploads 
    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        })) 
    }


    //make sure  that  the component did update 
    componentDidUpdate(prevProps, prevState){
        console.log(prevState.posts)
        console.log(this.state)
    }

   
    //render pages 
    //exact keyword does an exact match. If we don't specify this then both the pages will render togeether
    render(){ 
        return (
            <div>
                <Route exact path = "/" render = {() => (
                    <div>
                        <Title title = {"PhotoGram"}/>
                        <Photowall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate}/>
                    </div> 
                )}/>
                   
                
                <Route path ="/addPhoto" render = {({history}) => (
                    <AddPhoto onAddPhoto = {(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                )}/>
            </div> 
        )
    }
}




export default Main