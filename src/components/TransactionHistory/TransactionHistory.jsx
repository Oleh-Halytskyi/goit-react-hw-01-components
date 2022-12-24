import PropTypes from 'prop-types';
import capitalize from './capitalize';
import { Box } from '../Box';
import {
  Table,
  TableBody,
  TableColum,
  TableHeader,
  TableTitle,
  TableColumBody,
  TableStringBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="section">
      <Table>
        <TableHeader>
          <TableTitle>
            <TableColum>Type</TableColum>
            <TableColum>Amount</TableColum>
            <TableColum>Currency</TableColum>
          </TableTitle>
        </TableHeader>
        <TableBody>
          {items.map(({ id, type, amount, currency }, index) => (
            <TableStringBody key={id} index={index}>
              <TableColumBody>{capitalize(type)}</TableColumBody>
              <TableColumBody>{amount}</TableColumBody>
              <TableColumBody>{currency}</TableColumBody>
            </TableStringBody>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};
