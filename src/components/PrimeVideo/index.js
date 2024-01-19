import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesDetails} = props
  const actionMoviesList = moviesDetails.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesDetails.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-img"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
    
  )
}

export default PrimeVideo
