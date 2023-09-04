import { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <>
        <td>{this.props.title}</td>
        <td>{this.props.genre}</td>
        <td>{this.props.rate}</td>
        <td>
          <button className="btn btn-danger" onClick={this.props.delete}>
            Delete
          </button>
        </td>
      </>
    );
  }
}

export default Movie;
