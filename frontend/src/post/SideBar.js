import React from 'react';
import {Category} from "./Category";
import {Topics} from "./Topics";
import {Subtopics} from "../home/Subtopics";

export class SideBar extends React.Component {
    render() {
        const category = this.props.category;
        const topic = this.props.topic;
        const subtopic = this.props.subtopic;

        return (
            <div>
                <Category category={category}/>
                <Topics category={category} topic={topic}/>
                <Subtopics topic={topic} subtopic={subtopic}/>
            </div>

        )
    }
}