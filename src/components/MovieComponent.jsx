import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MovieWrapper = styled.section(
  {
    border: "1px solid #0F3460",
    boxShadow: "1px 1px 5px #2f2f2f",
    borderRadius: ".2rem",
    overflow: "hidden",
    width: "15rem",
    margin: ".5rem",
    cursor: "pointer",
    transition: "transform .3s",
  },
  { ":hover": { transform: "translateY(-5px)" } }
);

const Image = styled.img({
  width: "100%",
  height: "20rem",
});

const TitleWrapper = styled.section({
  padding: ".5rem .4rem",
  fontSize: "1rem",
  fontWeight: "600",
  display: "flex",
});

const InfoWrapper = styled.section({
  padding: ".5rem .6rem",
  fontSize: "1rem",
  fontWeight: "600",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ShowMore = styled.button(
  {
    fontSize: ".8rem",
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  { ":hover": { textDecoration: "underline" } }
);

const MovieComponent = ({ movie }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <MovieWrapper>
      <section>
        <Image src={movie.image} loading="lazy" />
      </section>
      <Section>
        <TitleWrapper>
          <h1
            className={movie.title.length > 20 && !showMore ? "truncate" : ""}
          >
            {movie.title}
          </h1>
          <ShowMore
            onClick={handleShowMore}
            hidden={movie.title.length < 20 || showMore}
          >
            more
          </ShowMore>
        </TitleWrapper>
        <InfoWrapper>
          {movie.rank && <small>Ranking : {movie.rank} </small>}
          {movie.imDbRating && <small>Rating : {movie.imDbRating} </small>}
        </InfoWrapper>
      </Section>
    </MovieWrapper>
  );
};

MovieComponent.propTypes = {
  movie: PropTypes.object,
};

export default MovieComponent;
