import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";


/*
Creating a Component
1. Identify the block of JSX code that appears to be duplicated.
2. Create file with AllCaps and insert content (see CommentDetail.js more more info).
3. Once the component file is created, add import statement to relative file path.
4. Use JSX to reference compenent as follows (<CommentDetail />).
5. Within the JSX reference add prop's data (author="Matthew").
6. To nest a child component into a parent component use a closing tag to nest (<ParentComponent><ChildComponentHere/></ParentComponent>). NOTE: HARD CODED CONTENT CAN BE USED
*/



const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Question</h4>
            Is react cool?
          </div>

        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            author="Matthew"
            commentTime="27 Minuites ago"
            comment="Hello... Frank Walker from National Tiles!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Ethan"
            commentTime="1 Day ago"
            comment="This is a comment"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Thomas"
            commentTime="26 November"
            comment="Compenents in react"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));