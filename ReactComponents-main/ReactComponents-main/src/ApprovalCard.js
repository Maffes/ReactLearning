import React from "react";


/*
{props.children} Is very important to populate with data
*/


const ApprovalCard  = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Upvote</div>
          <div className="ui basic red button">Downvote</div>
        </div>
      </div>
    </div>
  )
};

export default ApprovalCard;