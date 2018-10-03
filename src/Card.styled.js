import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Image = styled.img`
  height: auto;
  width: 160px;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.2rem;
  text-align: center;
  /* text-transform: uppercase; */
`;

// const MyLink = styled(Link)`
const MyLink = styled.a`
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
  Image,
  Title,
  MyLink,
};
