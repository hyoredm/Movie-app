import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
margin: 50px 50px 50px 50px ;
width: 50%;
`
const Img = styled.div`
text-align: center;
`


function Detail() {

    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie);
    return (
        <div>
        <Container>
            <Img>
        <img src={movie.medium_cover_image} />
        </Img>
        <h1>{movie.title}</h1>
        <p>{movie.description_full}</p>
        </Container>
        </div>
    );
}

export default Detail;