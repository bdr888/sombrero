import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

// const Sombrero = styled.img`
//   margin: 0 auto;
//   width: 90%;
//   height: auto;

//   @media (min-width:515px) {
//     width: auto;
//     height: 50px;
//   }
// `;

const Title = styled.div`
  font-family: 'Roboto', cursive;
  font-size: 2rem;
  text-align: center;
  color: white;
  padding: 1rem 0;
  
  @media (min-width: 450px) {
    padding: 1rem 0 2rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 1rem;

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0.5rem 0;

    &:link{
      color: white;
    }
    
    &:hover{
      color: grey;
    }
    
    &:active{
      color: #f410b1;
    }
`;

export {
  Wrapper,
  // Sombrero,
  Title,
  MyLink,
  Links,
};
