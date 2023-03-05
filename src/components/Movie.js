import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container  = styled.div`
width: 600px;
background-color: white;
margin-bottom: 70px;
display: flex;
align-items: flex-start;
justify-content: space-between;
font-weight: 300;
padding: 20px;
border-radius: 5px;
color: #b2b3bc;
box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;


const Content = styled.div`
display: flex;
flex-direction: column;
margin-left: 80px;

`

const Img = styled.div`
position: relative;
top: 0px;
max-width: 150px;
width: 50%;
margin-right: 30px;
`

const Title = styled.h1`
margin-bottom: 5px;
font-size: 15px;
color: #2c2c2c;
`

const Genres = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
margin: 5px 0px;
`

function Movie ({id, coverImg, title, summary, genres}) {
    return (
    <div>
        <Container>
          <Img>
            <img src={coverImg} alt={title} />
            </Img>
            <Content>
            <Title>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
            </Title>
            <p>{summary.slice(0,140)}...</p>
            
            <Genres>
            <ul>
             {genres.map(g => (
                <li key={g}>{g}</li>
                ))}
            </ul>
            </Genres>
            </Content>
        </Container>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:  PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
