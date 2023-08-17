import { Transaction } from './transaction';
import { Table } from './transactions.styled';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Transaction type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
