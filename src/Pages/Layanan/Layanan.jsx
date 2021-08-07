import { Component, Fragment } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import ActionType from "../../Redux/ActionType";
class Layanan extends Component {
    render(){
       
        return (
            <div className="container mb-5">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                        <Button variant="primary">
                            Keranjang <Badge bg="secondary">{this.props.order}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4">
                        <Card>
                            <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/954/5/66/code-programmers-programming-doom-game-wallpaper-preview.jpg" />
                            <Card.Body>
                                <Card.Title>Tutorial javascript</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <div className="row">
                                    <div onClick={() => this.props._handleMinus()} className="col-sm-3">
                                        <Button className="btn btn-primary col-12">-</Button>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <Card body>{this.props.order}</Card>
                                    </div>
                                    <div className="col-sm-3">
                                        <Button onClick={() => this.props._handlePlus()} className="btn btn-primary col-12">+</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.countOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        _handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layanan)