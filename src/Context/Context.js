// import React, { Component, createContext, Fragment } from 'react';
// import ActionType from '../Redux/ActionType';


// const RootContext = createContext();
// const Provider = RootContext.Provider;


// const GlobalProvider = (Children) => {
//     return (
//         class ParentComp extends Component {

//             state = {
//                 countOrder: 0
//             }

//             dispatch = (action) => {
//                 switch (action.type) {
//                     case ActionType.PLUS_ORDER:
//                         return this.setState({
//                             countOrder: this.state.countOrder + 1
//                         })
//                         break;
//                     case ActionType.MINUS_ORDER:
//                         return this.setState({
//                             countOrder: this.state.countOrder > 0 ? this.state.countOrder - 1 : 0
//                         })
//                         break;
//                     default:
//                         break;
//                 }
//             }



//             render() {
//                 return ( < Provider value = {
//                         {
//                             state: this.state,
//                             dispatch: this.dispatch
//                         }

//                     } > < Children {...this.props }
//                     /> </Provider > )
//             }
//         }
//     )
// }


// // export default GlobalProvider

// export default GlobalProvider


// const Consumer = RootContext.Consumer;
// export const GlobalConsumer = (Children) => {
//     return (
//         class ConsumerComp extends Component {
//             render() {
//                 return ( <
//                     Consumer > < Children / > < /Consumer>
//                 )
//             }
//         }
//     )
// }