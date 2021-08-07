import { Component, Fragment } from "react";
import Post from "./Post";
import axios from "../../axios";
import apiConfig from "../../apiConfig"
import {Button, Modal, Form} from 'react-bootstrap'
import API from "../../Services/ApiConfig";

class PostComponent extends Component {

    constructor(props){
        
        super(props);
        this.state = {
            posts: [],
            showModal: false,
            formPost: {
                userId: 1,
                id: 0,
                title: '',
                body: ''
            },
            stateUpdate: false
        };
    }

    _showModal = () => {
        this.setState({
            showModal: true
        });

        
    }

    _hideModal = () => {
        this.setState({
            showModal: false
        })
    }


    sendNewPost = () => {
        this._newPost();
        this._hideModal();
    }


    _handleEventUpdate = (data) => {
        this.setState({
            formPost: data,
            stateUpdate: true,
        })

        this._showModal();
    }


    handleFormChange = (event) => {
        let newForm = {...this.state.formPost};

        newForm[event.target.name] = event.target.value;

        let id = new Date().getTime();
        if(!this.state.stateUpdate){
            newForm['id'] = id;
        }


        this.setState({
            formPost: newForm   
        });
    }



    _eventToDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }



    

    componentDidMount(){
        this._retrieveData();
    }

    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="jumbotron jumbotron-fluid mt-4 mb-4">
                            <div className="container">
                                <h1 className="display-4">Blog post</h1>
                                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-sm" onClick={this._showModal}>New Post</button>
                            </div>
                        </div>
                        <div className="row">
                                {
                                    this.state.posts.map(post => {
                                        return (
                                            <div className="col-sm-3" key={post.id}>
                                                <Post data={post} toDetail={this._eventToDetail} remove={this._eventDelete} update={this._handleEventUpdate} />
                                            </div>
                                        )
                                    })
                                }
                        </div>
                        
                    </div>
                </div>

                
                
                

                {this.state.showModal ? (
                    <Modal show={this.state.showModal} onHide={this._hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Post
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={this.state.formPost.title} name="title" onChange={this.handleFormChange} type="text" placeholder="title post" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post</Form.Label>
                            <Form.Control value={this.state.formPost.body} name="body" onChange={this.handleFormChange} as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="btn-light" onClick={this._hideModal}>Close</Button>
                    <Button onClick={ this.state.stateUpdate ? this._updatePost : this.sendNewPost}>Submit</Button>
                    </Modal.Footer>
                </Modal> 
                ) : null}
                
            </Fragment>
        )
    }

    _eventDelete = (data) => {
        API.deletePosts(data).then(result => {
            this._retrieveData()
        })
    }

    _retrieveData = () => {
        API.getPost().then(result => {
            this.setState({
                posts: result
            })
        })
    }

    _newPost = () => {
        API.post(this.state.formPost).then(result => {
            this._retrieveData();
            this.state.formPost = {
                userId: 1,
                id: 0,
                title: '',
                body: ''
            }
        });
    }

    _updatePost = () => {
        API.putPosts(this.state.formPost, this.state.formPost.id).then(result => {
            this._retrieveData();
            this._hideModal();
            this.state.formPost = {
                userId: 1,
                id: 0,
                title: '',
                body: ''
            }
            this.state.stateUpdate = false;
        })
    }

    
}

export default PostComponent