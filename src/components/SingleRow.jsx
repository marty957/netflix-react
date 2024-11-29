import { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

class SingleRow extends Component {
  state = {
    movies: []
  };

  fetchMovies = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b001b4f4&s=" + this.props.title)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((movies) => {
        this.setState({ movies: movies.Search });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        <h2>{this.props.title}</h2>
        <Row>
          {movies.slice(0, 6).map((movie) => (
            <Col sm={12} md={4} lg={2} key={movie.idmbId} className="mb-2 text-center px-1">
              <Image src={movie.Poster} alt="poster" className="img-fluid" />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default SingleRow;
