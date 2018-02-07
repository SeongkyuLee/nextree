import React from 'react';

export class Topics extends React.Component {

    _setTopics() {
        const category = this.props.category;
        let topics = [];

        switch (category) {
            case "design":
                topics = ["UI", "Branding", "Typography", "UX", "Interaction"];
                break;
            case "front-end":
                topics = ["HTML", "CSS", "Javascript", "React.js"];
                break;
            case "back-end":
                topics = ["Server", "Theory", "Django", "Interaction"];
                break;
            case "planning":
                topics = ["Planning", "Sketch", "Like", "This"];
                break;
        }

        this.setState({
            topics:topics
        });
    }

    componentWillMount() {
        this._setTopics();
    }

    _renderTopics() {
        const topics = this.state.topics;

        const renderedTopics = topics.map(topic => {
            const className = (topic === this.state.topic) ? 'CurrentTopic' : 'Topic';

            return (
                <div className={className}>
                    {topic}
                </div>
            )
        })

        return renderedTopics;
    }

    render() {
        const topics = this._renderTopics();

        return (
            <div>
                <hr/>
                {topics}
                <hr/>
            </div>
        )
    }
}