import styled from 'styled-components';
import { Link } from '@reach/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom right, black, #545454);
  width: 100%;
  margin: 0 auto;

  @media (min-width: 440px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

// const Sombrero = styled.img`
//   margin: 0 auto;
//   width: 90%;
//   height: auto;

//   @media (min-width:415px) {
//     width: auto;
//     height: 50px;
//   }
// `;

const Title = styled.div`
  font-family: 'Roboto', cursive;
  font-size: 1.6rem;
  text-align: center;
  color: white;
  padding: 1rem 0.5rem 1rem 1rem;

  @media (min-width: 440px) {
    padding: 2rem 0 1rem;
    font-size: 2rem;
  }
`;

const Links = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

  @media (min-width: 440px) {
    display: flex;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0.5rem 0;

  &:link {
    color: white;
  }

  &:hover {
    color: grey;
  }

  &:active {
    color: #f410b1;
  }
`;

const HamburgerMenu = styled.div`
  color: white;
  border: 5px solid white;
  width: 40px;
  height: 40px;
  margin: 1rem;

  @media (min-width: 440px) {
    display: none;
  }
`;

export { HamburgerMenu, Links, MyLink, Title, Wrapper };
