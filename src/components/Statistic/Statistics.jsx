import PropTypes from 'prop-types';
import { Box } from '../Box';
import getRandomHexColor from './getRandomHexColor';

import {
  Title,
  StatList,
  ItemStatistic,
  ItemCaption,
  ItemValue,
} from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <Box as="section" mb="20px">
      <Title>{'Upload stats'.toUpperCase()}</Title>
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <ItemStatistic
            key={id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <ItemCaption>{label}</ItemCaption>
            <ItemValue>{percentage} %</ItemValue>
          </ItemStatistic>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
