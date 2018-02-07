import React from 'react';
import './RecentPosts.css';

export class RecentPosts extends React.Component {
    state = {
        posts: [
            {
                id:"id1",
                title:"Title1",
                description:"Description1",
                author:"Author1",
                date:"Date1"
            },
            {
                id:"id2",
                title:"Title2",
                description:"Description2",
                author:"Author2",
                date:"Date2"
            },
            {
                id:"id3",
                title:"Title3",
                description:"Description3",
                author:"Author3",
                date:"Date3"
            }
        ]
    };

    render() {
        return (
            <div>
                <hr/>
                <section className="intro">
                    <div className="container">
                        <h1>Latest</h1>
                    </div>
                </section>

                <section className="timeline">
                    <ul>
                        {this.state.contents.map(post => {
                            return (
                                 <Post
                                    title={post.title}
                                    description={post.description}
                                    author={post.author}
                                    date={post.date}
                                />
                            )
                        })}
                    </ul>
                </section>
                <hr/>
            </div>
        )
    }
}

class Post extends React.Component {
    render() {
        return (
            <li>
                <div>
                    <p> {this.props.title} </p>
                </div>
            </li>
        )
    }
}