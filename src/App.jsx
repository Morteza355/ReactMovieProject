import { Component } from "react";
import styled from "styled-components";

import MoviesComponent from "./components/MoviesComponents";
import SearchComponent from "./components/SearchComponent";

const Wrapper = styled.section({
  backgroundColor: "#1A1A2E",
  color: "#E94560",
  minHeight: "100vh",
});

const Line = styled.section({
  width: "100%",
  height: "1px",
  backgroundColor: "#0F3460",
});

const Button = styled.button({
  padding: ".7rem .9rem",
  color: "#ffffff",
  borderRadius: ".2rem",
  backgroundColor: "#E94560",
  border: "none",
  cursor: "pointer",
  margin: "1rem",
});

const ButtonContainer = styled.section({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default class App extends Component {
  state = {
    postsToShow: [],
    movies: [],
    perPage: 20,
    next: 20,
    userInput: "",
  };

  handleGetTopMovies = async () => {
    const { state, handleSliceMovies } = this;
    const response = await fetch(
      `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_API_TOKEN}`
    );
    const data = await response.json();
    if (data.errorMessage) {
      console.error(data.errorMessage);
      return;
    } else {
      this.setState({ movies: data.items });
      handleSliceMovies(0, state.perPage);
    }
  };

  handleSliceMovies = (start, end) => {
    const movies = [...this.state.movies];
    const slicedDatas = movies.slice(start, end);
    this.setState({ postsToShow: slicedDatas });
  };

  handleLoadMoreMovies = () => {
    const { next, perPage } = this.state;
    this.handleSliceMovies(0, next + perPage);
    this.setState((prevState) => ({
      next: prevState.next + prevState.perPage,
    }));
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value.toLowerCase() });
  };

  handleSearchMovies = () => {
    const { userInput, postsToShow } = this.state;
    const userQuery = userInput.toLowerCase();
    const filteredData = postsToShow.filter((movie) => {
      if (userQuery === "") {
        return movie;
      } else {
        return movie.title.toLowerCase().includes(userQuery);
      }
    });
    return filteredData;
  };

  componentDidMount() {
    this.handleGetTopMovies();
  }

  render() {
    const { handleUserInput, handleSearchMovies, handleLoadMoreMovies } = this;
    return (
      <Wrapper>
        <SearchComponent handleSearchInput={handleUserInput} />
        <Line />
        <MoviesComponent handleSearchMovies={handleSearchMovies} />
        <Line />
        <ButtonContainer>
          <Button onClick={handleLoadMoreMovies}>Load More</Button>
        </ButtonContainer>
      </Wrapper>
    );
  }
}
