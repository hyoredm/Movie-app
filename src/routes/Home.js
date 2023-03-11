import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import "./Style.css";

const Wrapper  = styled.div`
color: black;
margin-left: 50px;
`;

const Container  = styled.div`
background-color: black;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
padding: 50px;
padding-top: 70px;
width: 100%;
`;

function Filter({movies, setFilterItem}) {

  const onClick = (event) => {
    console.log(event);
    setFilterItem(event.target.innerText);
  };
  
  return(
  <div>
  <ul>
    <li className="filterBtn" onClick={onClick}>Drama</li>
    <li className="filterBtn" onClick={onClick}>Romance</li>
    <li className="filterBtn" onClick={onClick}>Crime</li>
    <li className="filterBtn" onClick={onClick}>Music</li>
    <li className="filterBtn" onClick={onClick}>Fantasy</li>
    <li className="filterBtn" onClick={onClick}>Sci-Fi</li>
    <li className="filterBtn" onClick={onClick}>Comedy</li>
    <li className="filterBtn" onClick={onClick}>Documentary</li>
    <li className="filterBtn" onClick={onClick}>Sport</li>
    <li className="filterBtn" onClick={onClick}>News</li>
    <li className="filterBtn" onClick={onClick}>Mystery</li>
  </ul>
  </div>
)
};


function Home() {
 
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filterItem, setFilterItem] = useState('');
  

  
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
              <Filter filterItem={filterItem} setFilterItem = {setFilterItem}/>
              <Container>
              {filterItem === '' ? 
              movies.map((movie)=> (
                <Movie
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                />
              )) :
              movies.map((movie)=> (
                movie.genres.includes(filterItem) ?
                <Movie
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                /> : null
              ))
            
          }
                   </Container>


                
            </div>
        )}

      </div>
    );
}

export default Home;

// {movies.map((movie) => (
  //<Movie
   // key={movie.id} 
    //id={movie.id}
   // coverImg={movie.medium_cover_image}
   // title={movie.title}
   // summary={movie.summary}
   // genres={movie.genres}
   // />

 //))}