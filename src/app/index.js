import React from "react";
import { render } from "react-dom";

// import { Header } from "./components/Header";
// import { Home } from "./components/Home";

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             homeLink: "Home",
//             homeMounted: true
//         };
//         console.log("Index constructor....");
//     }
//
//     componentWillMount() {
//         console.log("Index Component will mount");
//     }
//
//     componentDidMount() {
//         console.log("Index Component did mount");
//     }
//
//     componentWillReceiveProps(nextProps) {
//         console.log("Index Component will receive props", nextProps);
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("Should Index component update?", nextProps, nextState);
//         return true;
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         console.log("Home Component will update", nextProps, nextState);
//     }
//
//     componentDidUpdate(nextProps, nextState) {
//         console.log("Index Component did update", nextProps, nextState);
//     }
//
//     componentWillUnmount() {
//         console.log("Index Component will unmount");
//     }
//
//     onGreet() {
//         alert("hello, carl");
//     }
//
//     onChangeLinkName(newName) {
//         this.setState({
//             homeLink: newName
//         })
//     }
//
//     onChangeHomeMounted() {
//         this.setState({
//             homeMounted: !this.state.homeMounted
//         })
//     }
//
//     render() {
//         let user = {
//             name: "carl",
//             hobbies: ["playing lol", "look books"]
//         };
//
//         let homeComponent = "";
//
//         if (this.state.homeMounted) {
//             homeComponent = (
//                 <Home phone={"13800000001"}
//                       age={27}
//                       user={user}
//                       greet={this.onGreet}
//                       changeLink={this.onChangeLinkName.bind(this)}
//                       linkName={this.state.homeLink}
//                 >
//                     <div>
//                         <p>I am home's first child paragraph.</p>
//                         <p>I am home's second child paragraph.</p>
//                     </div>
//                 </Home>
//             )
//         }
//
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         <Header homeLink={this.state.homeLink} />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         {homeComponent}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-1">
//                         <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from "./components/Home";
import { User } from "./components/User";
import { Header } from "./components/Header";


class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <Header />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <Route exact path="/" component={Home}/>
                                <Route path={"/home"} component={Home}/>
                                <Route path="/user/:id" component={User}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    };
}

render(<App/>, window.document.getElementById("app"));