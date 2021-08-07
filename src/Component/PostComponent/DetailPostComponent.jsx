import axios from "../../axios";
import { Fragment } from "react";
import { Component } from "react";
import apiConfig from '../../apiConfig';
import { Card, CardText, CardTitle, Button } from 'reactstrap';


class DetailPostComponent extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            post: {},
            postId: prop.match.params.id
        }


        this._getSinglePost();
    }

    _getSinglePost = () => {
        axios.get(`${apiConfig.fetchPost}/${this.state.postId}`).then(response => {
            this.setState({
                post: response.data
            })
        })
    }

    render(){
        return (
            <Fragment>
                <div className="container mb-5">
                    <div className="row mt-5">
                        <Card body key={this.state.post.id}>
                            <CardTitle tag="h5">{this.state.post.title}</CardTitle>
                            <CardText>{this.state.post.body}</CardText>
                            <Button color="warning mb-2">Update Post</Button>
                            <Button color="danger mb-2">Delete Post</Button>
                        </Card> 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DetailPostComponent;