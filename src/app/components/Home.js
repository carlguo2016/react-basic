import React from "react";

// export class Home extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             phone: props.phone,
//             age: props.age,
//             user: props.user,
//             changeLink: props.changeLink,
//             linkName: props.linkName,
//
//             homeLink: props.linkName
//         };
//         console.log("Home constructor....");
//     }
//
//     componentWillMount() {
//         console.log("Home Component will mount");
//     }
//
//     componentDidMount() {
//         console.log("Home Component did mount");
//     }
//
//     componentWillReceiveProps(nextProps) {
//         console.log("Home Component will receive props", nextProps);
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("Should Home component update?", nextProps, nextState);
//         return true;
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         console.log("Home Component will update", nextProps, nextState);
//     }
//
//     componentDidUpdate(nextProps, nextState) {
//         console.log("Home Component did update", nextProps, nextState);
//     }
//
//     componentWillUnmount() {
//         console.log("Home Component will unmount");
//     }
//
//     onMakeOlder() {
//         this.setState({
//             age: this.state.age + 3
//         })
//     }
//
//     onChangeLink() {
//         this.state.changeLink(this.state.homeLink)
//     }
//
//     onHandleChange(event) {
//         this.setState({
//             homeLink: event.target.value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>Your phone is {this.state.phone}, your age is {this.state.age}</p>
//                 <p>User Object => Name: {this.state.user.name}</p>
//                 <div>
//                     <p>Hobbies</p>
//                     <ul>
//                         {this.state.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
//                     </ul>
//                 </div>
//                 <hr/>
//                 {this.props.children}
//                 <hr/>
//                 <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
//                 <hr/>
//                 <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
//                 <hr/>
//                 <input type="text"
//                        value={this.state.homeLink}
//                        onChange={(event) => this.onHandleChange(event)}
//                 />
//                 <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
//             </div>
//         );
//     }
// }
//
// Home.propTypes = {
//     phone: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object,
//     changeLink: React.PropTypes.func,
//     linkName: React.PropTypes.string,
//     children: React.PropTypes.element.isRequired,
//     greet: React.PropTypes.func
// };

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h4>Home Page</h4>
            </div>
        );
    }
}