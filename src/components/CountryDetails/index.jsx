import * as Styled from './styles.js';
import P from 'prop-types';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Details } from '../Details/index.jsx';
import { Container } from '../Container/index.jsx';

export const CountryDetails = ({ details = [] }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <section>
      <Container>
        {details.length === 0 ? null : (
          <Styled.BackButton onClick={handleClick}>
            <BsArrowLeft /> Back
          </Styled.BackButton>
        )}
        {details.length === 0 ? (
          <p
            style={{ textAlign: 'center', fontSize: '32px', marginTop: '80px' }}
          >
            Loading...
          </p>
        ) : (
          <Details details={details} />
        )}
      </Container>
    </section>
  );
};

CountryDetails.propTypes = {
  details: P.array,
};
