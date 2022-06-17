import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavourites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
}

export class ConnectedList extends Component {
  constructor(props){
    super(props)
    this.props = props
  }


  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.movies && this.props.movies.map((movie, index)=>{
              return (
                <li key={index}>
                  <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                  <button onClick={()=>this.props.removeMovieFavorite(movie)}>Eliminar</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
