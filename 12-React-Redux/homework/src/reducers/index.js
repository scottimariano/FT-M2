


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    isLoading : false
};

function rootReducer(state = initialState, action) {
if (action.type === "ADD_MOVIE_FAVORITE") {
    return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
    }
}
if (action.type === "GET_MOVIES") {
    return {
        ...state,
        moviesLoaded: action.payload.Search
    };
}
if (action.type === "GET_MOVIE_DETAIL") {
    return {
        ...state,
        movieDetail: action.payload
    };
}
if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload.imdbID)
    };
}

if (action.type === "TOGGLE_LOADING") {
    return {
        ...state,
        isLoading: !state.isLoading
    };
}

return {...state}
}

export default rootReducer;