import React from "react";

export class Content extends React.Component {
    render() {
        const content = this.props.content;

        return (
            <div className={Content}>
                {content.index}
                {content.title}
            </div>
        )
    }
}