import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Post = (prop) =>{
    
    return (
        <Card body key={prop.data.id}>
            <CardTitle tag="h5">{prop.data.title}</CardTitle>
            <CardText>{prop.data.body}</CardText>
            <Button color="primary mb-2" onClick={() => prop.toDetail(prop.data.id)} >Detail Post</Button>
            <Button color="warning mb-2" onClick={() => prop.update(prop.data)}>Update Post</Button>
            <Button color="danger mb-2" onClick={() => prop.remove(prop.data.id)}>Delete Post</Button>
        </Card> 
    )
}

export default Post