import styled from "styled-components";
import PropTypes from "prop-types";

const SearchWrapper = styled.section({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "2rem",
});

const Input = styled.input({
  border: "1px solid #0F3460",
  color: "#ffffff",
  borderRadius: ".2rem",
  padding: ".5rem 1rem",
  fontSize: ".9rem",
  backgroundColor: "transparent",
  outline: "none",
  letterSpacing: ".02rem",
  width: "18rem",
});

const SearchComponent = ({ handleSearchInput }) => {
  return (
    <SearchWrapper>
      <Input
        placeholder="Search"
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </SearchWrapper>
  );
};

SearchComponent.propTypes = {
  handleSearchInput: PropTypes.func,
};

export default SearchComponent;
