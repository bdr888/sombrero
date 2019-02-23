import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled.div`
  margin: 1rem auto;
`;

const Sombrero = styled.img`
  margin: 0 auto;
  width: 90%;
  height: auto;

  @media (min-width:515px) {
    width: auto;
    height: 50px;
  }
`;

const Title = styled.div`
  font-family: 'Roboto', cursive;
  font-size: 2rem;
  text-align: center;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;

    &:link{
      color: black;
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
  Sombrero,
  Title,
  MyLink,
};
