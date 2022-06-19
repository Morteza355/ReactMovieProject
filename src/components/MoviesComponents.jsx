import styled from "styled-components";
import PropTypes from "prop-types";

import MovieComponent from "./MovieComponent";

const Wrapper = styled.section({
  padding: "2rem 0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const MoviesComponent = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieComponent movie={movie} key={movie.id} />
      ))}
    </Wrapper>
  );
};

MoviesComponent.propTypes = {
  movies: PropTypes.array,
};

export default MoviesComponent;
