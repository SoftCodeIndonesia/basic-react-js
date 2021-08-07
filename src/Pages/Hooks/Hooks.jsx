import { useState } from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

class Hooks extends Component {
    state = {
        value: 0
    }

    updateValue = () => {
        this.setState({
            value: this.state.value + 1
        })
    }


    componentDidMount(){
        document.title = `Value Count : ${this.state.value}`;
    }

    componentDidUpdate(){
        document.title = `Value Count : ${this.state.value}`;
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div>
                            <p>Nilai sekarang : {this.state.value}</p>
                            <Button onClick={this.updateValue} variant="primary">update nilai</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const Hooks = (props) => {

//     const[count, setCount] = useState(0)

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div>
//                         <p>Nilai sekarang : {count}</p>
//                         <Button onClick={() => setCount(count + 1)} variant="primary">update nilai</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Hooks