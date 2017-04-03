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

import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/user/10">User</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}