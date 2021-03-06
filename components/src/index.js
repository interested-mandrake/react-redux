import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
          <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Savannah" timeAgo="Today at 5:30PM" commentText="can't believe I hadn't seen this before"
                avatar={faker.image.avatar()} /> {/*provide custom props*/}
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:18PM" commentText="this made me laugh so hard" avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 11:59AM" commentText="what a funny video!"
                avatar={faker.image.avatar()} /> 
            </ApprovalCard>

         </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));