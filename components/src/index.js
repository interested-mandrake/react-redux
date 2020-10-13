import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Savannah" timeAgo="Today at 5:30PM" commentText="can't believe I hadn't seen this before"
            avatar={faker.image.avatar()} /> {/*provide custom props*/}
            <CommentDetail author="Alex" timeAgo="Today at 2:18PM" commentText="this made me laugh so hard" avatar={faker.image.avatar()}
            />
            <CommentDetail author="Jane" timeAgo="Yesterday at 11:59AM" commentText="what a funny video!"
            avatar={faker.image.avatar()} /> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));