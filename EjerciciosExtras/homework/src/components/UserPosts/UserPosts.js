import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions';
import {Link} from 'react-router-dom'

export function mapStateToProps(state){
  return {
    userPosts: state.userPosts
  }
}

export function mapDispatchToProps(dispatch){
  return {
    getAllUserPosts: (userId) => dispatch(getAllUserPosts(userId))
  }
}

export class UserPosts extends React.Component {
  constructor(props){
    super(props)
    this.userId = props.match.params.id
  }


  componentDidMount(){
    this.props.getAllUserPosts(this.userId)
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.userId}</h4>
        {this.props.userPosts.map((post, index)=>{
          return <div key={index}>
            <Link to={`/user/:userid/post/${post.id}/coments`}>
              <p>Id: {post.id}</p>
            </Link>
            <p>Titulo: {post.title}</p>
            <p>{post.body}</p>
          </div>
        })}
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserPosts);