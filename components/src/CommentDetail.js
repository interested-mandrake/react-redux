import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => { //we pass props in as a function argument
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author} {/*access the prop*/}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
    );
};

export default CommentDetail;