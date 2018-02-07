import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                 <a href="#" >
                    <span>NEXTREE</span>

                </a>
                <a href ="#">
                    <i className="material-icons">search</i>
                </a>
                <a href="#">
                    <i className="material-icons">bookmark_border</i>
                </a>
                <a href="#">
                    <span>Login</span>
                </a>
                <hr/>
            </div>

        )
    }
}