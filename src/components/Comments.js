import React, { Component } from "react";

class Comments extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  };

  render() {
    return (
      <div className="comment">
        {this.props.postComments.map((comment, i) => (
          <div className="comment" key={i}>
            <strong>{comment.user}</strong>
            {comment.text}
            <button
              className="remove-comment"
              onClick={this.props.removeComment.bind(
                null,
                this.props.match.params.postId,
                i
              )}
            >
              &times;
            </button>
          </div>
        ))}
        <form
          ref={element => (this.commentForm = element)}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input
            ref={element => (this.author = element)}
            type="text"
            placeholder="author"
          />
          <input
            ref={element => (this.comment = element)}
            type="text"
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
