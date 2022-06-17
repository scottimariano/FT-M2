import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail} from '../../actions/index';
import './Movie.css';

const mapStateToProps = (state) => {
    return{
        movie: state.movieDetail,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getMovieDetail: (movieId)=>dispatch(getMovieDetail(movieId))
    }
}

class Movie extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    
    componentDidMount(){
        const movieId = this.props.match.params.id
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            this.props.isLoading ? <p>LOADING...</p> :
            <div className="movie-detail">
                Detalle de la pelicula
                <p>Titulo: {this.props.movie.Title}</p>
                <p>Año: {this.props.movie.Year}</p>
                <p>Duración: {this.props.movie.Runtime}</p>
                <p>Director: {this.props.movie.Director}</p>
            </div>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Movie);