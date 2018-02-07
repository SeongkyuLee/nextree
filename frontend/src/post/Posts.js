import React from 'react';
import queryString from 'query-string';
import { Post } from './Post';
import {SideBar} from "./SideBar";

export class Posts extends React.Component {
    _setContents() {
        this.setState({
            contents: [
                {
                    index: 1,
                    title: 'About Design',
                    link: 'www.design.com',
                    author: 'Seongkyu Lee',
                    date: '20180101',
                    rate: 3.9
                },
                {
                    index: 2,
                    title: 'UI is something',
                    link: 'www.something.co.kr',
                    author: 'Minho Kim',
                    date: '20180107',
                    rate: 3.7
                }
            ]
        })
    }

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        const category = query.category;
        const topic = query.topic;
        const subtopic = query.subtopic;

        this.setState({
            category: category,
            topic: topic,
            subtopic: subtopic
        });

        this._setContents();

    }

    render() {
        return (
            <div>
                <SideBar
                    category={this.state.category}
                    topic={this.state.topic}
                    subtopic={this.state.subtopic}
                />
                <Post contents={this.state.contents}/>
            </div>
        )
    }
}