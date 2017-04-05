import React from "react";
// export const Header = (props) => {
//     return (
//         <div className="navbar navbar-default">
//             <div className="container">
//                 <div className="navbar-header">
//                     <ul className="nav navbar-nav">
//                         <li>
//                             <a href="#">{props.homeLink}</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/home" activeStyle={{ fontWeight: 'bold', color: 'red'}}>Home</NavLink></li>
                            <li><NavLink to="/user/10" activeStyle={{ fontWeight: 'bold', color: 'red'}}>User</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}