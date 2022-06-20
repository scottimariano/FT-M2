import React from 'react';
import { connect } from 'react-redux';
import { getAllCommentsPost } from '../../actions/index';
import './CommentsPost.css';

export class CommentsPost extends React.Component {
  constructor(props){
    super(props)
    this.userid = props.match.params.id
    this.id = props.match.params.id
  }
  
    componentDidMount() {
      const id = this.id
      this.props.getAllCommentsPost(id)
      .then(c =>{
        console.log("Comentarios cargados con éxito...")
      })
      .catch(err =>console.error(err))
    }

    render() {
        const idPost = this.props.id
        return (
            <div className="details">
                <h4>Comentarios del Post {idPost}</h4>
                {!this.props.commentsPost ? console.log("Espero ...") : 
                this.props.commentsPost.map(function(comment,index){
                  return (
                  <div key={index} className= "container">
                    <div key ={comment.id}> 
                    <p>{comment.id} - {comment.name}</p>
                    <p>{comment.body}</p>
                    </div>
                  </div>
              )
          
             })}
            </div>
        )
    }
}

export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAllCommentsPost: (id) => dispatch(getAllCommentsPost(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentsPost );