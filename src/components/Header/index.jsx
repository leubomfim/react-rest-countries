import * as Styled from './styles.js';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from '../Container/index.jsx';

export const Header = ({ onClick, theme = false }) => {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>
          <Link to="/">
            <Styled.Heading>Where in the world?</Styled.Heading>
          </Link>
          <Styled.Button onClick={onClick}>
            {!theme ? <BsFillMoonFill /> : <BsFillSunFill />}
            {!theme ? 'Dark mode' : 'Light Mode'}
          </Styled.Button>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Header>
  );
};

Header.propTypes = {
  onClick: P.func.isRequired,
  theme: P.bool,
};
