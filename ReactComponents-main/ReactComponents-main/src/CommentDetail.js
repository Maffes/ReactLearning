import React from "react";

/*
Creating a Component
1. Create a const with the same name as the file encapsulating the code.
2. Create export statement as below (export default FileName;)
3. Change any hard coded variables with probs
4. Add prop's to const (const CommentDetail = () =>) to (const CommentDetail = props => {}) NOTE THIS IS AN OBJECT
5. Add references from props to code ({props.author})
*/




const CommentDetail = props => {
  return (
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar}></img>
    </a>
    <div className="content">
      <a href="/" className="author">
      {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.commentTime}</span>
      </div>
      <div className="text">{props.comment}</div>
    </div>
    </div>
  )
}

export default CommentDetail;

