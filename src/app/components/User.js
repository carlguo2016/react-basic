import React from "react";

export class User extends React.Component {
    render() {
        return (
            <div>
                <h4>The User Page</h4>
                <p>user ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}
