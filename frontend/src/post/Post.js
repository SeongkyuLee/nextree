import React from 'react';
import {Content} from "./Content";

export class Post extends React.Component {
    _renderContents() {
        const contents = this.props.contents;

        const renderedContents = contents.map(content => {
            return (
                <Content content={content}/>
            )
        })

        return renderedContents;
    }

    render() {
        const contents = this._renderContents();

        return (
            <div>
                <hr/>
                {contents}
                <hr/>
            </div>
        )
    }
}