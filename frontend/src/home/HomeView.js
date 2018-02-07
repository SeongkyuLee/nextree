import React from 'react';
import {RecentPosts} from "./RecentPosts";
import {Introduction} from "./Introduction";
import {Categories} from "./Categories";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <RecentPosts/>
                <Introduction/>
                <Categories/>
            </div>
        )
    }
}