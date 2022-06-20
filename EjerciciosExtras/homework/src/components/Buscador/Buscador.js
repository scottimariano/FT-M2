import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions";
import { Link } from 'react-router-dom';

import './Buscador.css';

export function mapStateToProps(state){
  return {posts: state.posts}
}

export function mapDispatchToProps(dispatch){
  return {
    getAllPosts: () => dispatch(getAllPosts())
  }
}

export class Buscador extends Component {
  constructor(props){
    super(props)
    this.state = {
      filtrados: [],
      postsSearch: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
     filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    })
    this.setState({
      postsSearch: ""
    })
  }
  
  handleChange(event) {
    this.setState({
      postsSearch: event.target.value
    })
  }

  viewAllPost(){
    this.setState({
      ...this.state,
      filtrados: this.props.posts
    })
  }
  
  componentDidMount(){
    this.props.getAllPosts()
  }

  render() {

    return (
      <div className= "details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">Posts: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={this.state.postsSearch}
              onChange={(e)=> this.handleChange(e)}

            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        
        <button className="btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>
        <div className="details">
             <h4 className="title">Posts </h4>
             {(this.state.filtrados.length > 0) ? this.state.filtrados.map((post, index) => {return (
               <div key={index}className= "card">
                      <Link to={`/user/:userid/post/${post.id}/coments`}>
                        <p>Id: {post.id}</p>
                      </Link>
                      <p>Titulo: {post.title}</p>
                      <p>{post.body}</p>
                </div>
              )}):''}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
