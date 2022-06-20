import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export function mapStateToProps(state){
  return {
    users: state.users
  }
}

export function mapDispatchToProps(dispatch){
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export class Users extends Component {
  constructor(props){
    super(props)
    this.props = props
  }
  
  componentDidMount(){
    this.props.getAllUsers()
  }
  
  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index)=>{
              return (
                <tr key={index} className="header">
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td><Link to={`/users/${user.id}/posts`} className="button">Posts</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

