import React from 'react';
import CommentList from '../components/CommentList.js'
import CommentForm from '../components/CommentForm.js'

class CommentBox extends React.Component {

	constructor(props){
		super(props)
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
		this.state = {
			data: [
				{ author: "Beth", text: "I love cats!" },
				{ author: "Rachel", text: "I love cats too!" }
			]
		}
	}

	handleCommentSubmit(comment) {
		comment.id = Date.now()//comments need an id, just going to use a date for now
		var newComments = this.state.data.concat([comment])
		this.setState({data: newComments})
	}

	render() {
		return (
			<div className="comment-box">
				<h2>Add a Comment</h2> 
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
				<h2>Comments</h2>
					<CommentList data={this.state.data} />
		</div>
		)
}
}

export default CommentBox;