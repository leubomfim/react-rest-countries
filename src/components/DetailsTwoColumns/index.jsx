import * as Styled from './styles';
import P from 'prop-types';

export const DetailsTwoColumns = ({ children }) => {
  return <Styled.DetailsTwoColumns>{children}</Styled.DetailsTwoColumns>;
};

DetailsTwoColumns.propTypes = {
  children: P.node.isRequired,
};
