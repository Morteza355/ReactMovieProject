import { useState } from "react";
import styled from "styled-components";

const MovieWrapper = styled.section({
  border: "1px solid #0F3460",
  boxShadow: "1px 1px 5px #2f2f2f",
  borderRadius: ".2rem",
  overflow: "hidden",
  width: "15rem",
  margin: ".5rem",
});

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
          <small>Ranking : {movie.rank} </small>
          <small>Rating : {movie.imDbRating} </small>
        </InfoWrapper>
      </Section>
    </MovieWrapper>
  );
};

export default MovieComponent;