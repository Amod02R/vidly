import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteHandler = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies: newMovies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies to show</p>;

    return (
      <>
        <p>There are {count} movies</p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <Movie
                  title={movie.title}
                  genre={movie.genre.name}
                  rate={movie.dailyRentalRate}
                  delete={() => this.deleteHandler(movie)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
