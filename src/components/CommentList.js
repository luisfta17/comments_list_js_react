import React from 'react';
import Comment from './Comment.js';

class CommentList extends React.Component {
    render(){

        const commentCompontents = this.props.data.map((comment, index) => {
            return <Comment author={comment.author} key={index}>{comment.text}</Comment> 
        })

        return(
            <div className="comment-list">
                {commentCompontents}
            </div>
        )
    }
}

export default CommentList;