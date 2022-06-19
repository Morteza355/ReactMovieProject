import { Component } from "react";
import styled from "styled-components";

import PreLoader from "./components/common/PreLoader";
import MoviesComponent from "./components/MoviesComponents";
import SearchComponent from "./components/SearchComponent";
import SelectBox from "./components/SelectBox";

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

const FooterContainer = styled.footer({
  padding: "1rem 0rem",
  textAlign: "center",
  color: "#fff",
  fontWeight: "700",
  fontSize: "1.2rem",
});

const Link = styled.a({
  color: "#fff",
});

export default class App extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  handleSearchMovies = async (userInput) => {
    const response = await fetch(
      `https://imdb-api.com/en/API/SearchTitle/${process.env.REACT_APP_API_TOKEN}/${userInput}`
    );
    const data = await response.json();
    if (data.errorMessage) {
      console.error(data.errorMessage);
      return;
    } else {
      this.setState({ movies: data.results, isLoading: false });
    }
  };

  handleCallApi = async (topic) => {
    const response = await fetch(
      `https://imdb-api.com/en/API/${topic}/${process.env.REACT_APP_API_TOKEN}`
    );
    const data = await response.json();
    if (data.errorMessage) {
      console.error(data.errorMessage);
      return;
    } else {
      this.setState({ movies: data.items, isLoading: false });
    }
  };

  handleSelectBox = (value) => {
    const { handleCallApi } = this;

    switch (value) {
      case "top250": {
        handleCallApi("Top250Movies");
        break;
      }
      case "popular": {
        handleCallApi("MostPopularMovies");
        break;
      }
      case "soon": {
        handleCallApi("ComingSoon");
        break;
      }
      default:
        return;
    }
  };

  render() {
    const { handleSearchMovies, handleSelectBox } = this;
    const { movies, isLoading } = this.state;

    return (
      <Wrapper>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <SearchComponent handleSearchInput={handleSearchMovies} />
          <SelectBox handleSelectBox={handleSelectBox} />
        </section>

        <Line />
        <MoviesComponent movies={movies} />
        <PreLoader isLoading={isLoading} />
        <Line />
        <FooterContainer>
          <p>
            Made with ❤️ by{" "}
            <Link target={"_blank"} href="https://github.com/Morteza355">
              MORTEZA
            </Link>
          </p>
        </FooterContainer>
      </Wrapper>
    );
  }
}
