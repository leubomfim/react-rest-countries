import * as Styled from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import P from 'prop-types';
import { Container } from '../Container/index';

export const SearchArea = ({
  handleFetchChange,
  handleFetchClick,
  onClick,
  transform = false,
}) => {
  const regions = [
    {
      label: 'All',
      name: 'all',
    },
    {
      label: 'Africa',
      name: 'africa',
    },
    { label: 'Americas', name: 'americas' },
    {
      label: 'Asia',
      name: 'asia',
    },
    { label: 'Europe', name: 'europe' },
    { label: 'Oceania', name: 'oceania' },
  ];

  return (
    <Styled.SearchCountriesArea>
      <Container>
        <Styled.SearchDisplay>
          <Styled.SearchArea>
            <Styled.Icon>
              <AiOutlineSearch />
            </Styled.Icon>
            <Styled.SearchInput
              type="text"
              onChange={(e) => {
                handleFetchChange(e.target.value.toLowerCase());
              }}
              name="country_search"
              id="country_search"
              placeholder="Search for a country"
            />
          </Styled.SearchArea>
          <Styled.DetailsRegion>
            <Styled.Summary onClick={onClick}>
              <Styled.SummaryText transformArrow={transform}>
                {' '}
                Filter by Region <MdOutlineKeyboardArrowDown />
              </Styled.SummaryText>
            </Styled.Summary>
            <Styled.RegionList>
              <Styled.Ul>
                {regions.map((region) => (
                  <Styled.List
                    onClick={() => {
                      handleFetchClick(region.name);
                    }}
                    key={region.label}
                    value={region.name}
                  >
                    {region.label}
                  </Styled.List>
                ))}
              </Styled.Ul>
            </Styled.RegionList>
          </Styled.DetailsRegion>
        </Styled.SearchDisplay>
      </Container>
    </Styled.SearchCountriesArea>
  );
};

SearchArea.propTypes = {
  handleFetchChange: P.func.isRequired,
  onClick: P.func.isRequired,
  handleFetchClick: P.func.isRequired,
  transform: P.bool,
};
