import React from 'react';

export class Subtopics extends React.Component {
    _setSubtopics() {
        this.setState({
            subtopics: [
                {
                    id:1,
                    name:'User Experience'
                },
                {
                    id:2,
                    name:'Branding 심화'
                },
                {
                    id:3,
                    name:'front-end Developer'
                },
                {
                    id:4,
                    name:'개발자 로드맵'
                },
                {
                    id:5,
                    name:'User Interface 입문'
                },
                {
                    id:6,
                    name:'UI 디자이너가 알아야할 이론'
                },
                {
                    id:7,
                    name:'디자이너 로드맵'
                },
                {
                    id:8,
                    name:'브랜드 구체화'
                },
                {
                    id:9,
                    name:'UI 텍스트 작성법'
                }
            ]
        })
    }

    componentWillMount() {
        this._setSubtopics();
    }

    _renderSubtopics() {
        const subtopics = this.state.subtopics;

        const renderedSubtopics = (
            <ul>
                {subtopics.map(subtopic => {
                    return <p> {subtopic.name } </p>
                })}
            </ul>
        )

        return renderedSubtopics;

    }

    render() {
        const subtopics = this._renderSubtopics();

        return(
            <div className="Timeline">
                <hr/>
                {subtopics}
                <hr/>
            </div>
        )
    }
}