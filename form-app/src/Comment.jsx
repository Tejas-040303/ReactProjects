import { useState } from "react";
import './Comment.css'
import CommentForm from "./CommentForm";
export default function Comment(){
    let [comments, setComments] =useState([{
        userName: "Tejas",
        remarks: "Best",
        ratings: 5
    }]);

    let addNewComment = (comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    }

    return(
        <div>
            <h3>All Comments</h3>
            {comments.map((comments,idx)=>(
                <div className="comment" key={idx}>
                <span>{comments.remarks}</span>
                &nbsp;
                <span>(ratings - {comments.ratings})</span>
                <p>- {comments.userName}</p>
            </div>
            ))}
            
            <hr />
            <CommentForm addNewComment={addNewComment}/>
        </div>

    )
}