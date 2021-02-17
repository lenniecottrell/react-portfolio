import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState); //MovieState is an array of objects;
  const [movie, setMovie] = useState(null); //this can extract a specific movie object from MovieState

  //useEffect
  useEffect(() => {
    //compare the URL of the movie in the data array to the URL from useHistory
    //current movie is set to the movie where the URL matches (filter returns an array)
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]); //anytime movies or the url updates updates, run useEffect

  return (
    <>
      {movie && (
        <S_Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <S_Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </S_Headline>
          <S_Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              ></Award>
            ))}
          </S_Awards>
          <S_ImageDisplay>
            <img src={movie.secondaryImg} alt="second movie image" />
          </S_ImageDisplay>
        </S_Details>
      )}
    </>
  );
};

const S_Details = styled(motion.div)`
  color: white;
`;

const S_Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate() (-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const S_Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const S_Award = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const S_ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <S_Award>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </S_Award>
  );
};

export default MovieDetail;
