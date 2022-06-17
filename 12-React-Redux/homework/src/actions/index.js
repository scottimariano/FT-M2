export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      dispatch({ type: "TOGGLE_LOADING" });
      return fetch("http://www.omdbapi.com/?apikey=d4e0d2c8&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
          dispatch({ type: "TOGGLE_LOADING" });
        });
    };
  }

  export function getMovieDetail(idMovie) {
    return function(dispatch) {
      dispatch({ type: "TOGGLE_LOADING" });
      return fetch(`http://www.omdbapi.com/?apikey=d4e0d2c8&i=${idMovie}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        dispatch({ type: "TOGGLE_LOADING" });
        }
        );
    };
  }

  export function removeMovieFavorite(payload){
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }

