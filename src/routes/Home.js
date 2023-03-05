import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

const Wrapper  = styled.div`
color: black;
margin-left: 50px;
`;

const Container  = styled.div`
background-color: black;
display: grid;
flex-wrap: wrap;
padding: 50px;
padding-top: 70px;
width: 100%;

`;




function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await(
      await fetch(
      `https://yts.mx/api/v2/list_movies.json`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
 
      {loading ? (
        <h1>Loading...</h1>
        ) : (
          <div>
            <Wrapper>
              <h1> Movie App </h1>
              </Wrapper>
              <Container>
 

                {movies.map((movie) => (
                  <Movie
                    key={movie.id} 
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    />
              
                 ))}
  
                   </Container>
                
            </div>
        )}

      </div>
    );
}

export default Home;