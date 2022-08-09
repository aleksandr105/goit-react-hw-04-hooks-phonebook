import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ changeFilter }) => {
  return (
    <FilterLabel htmlFor="">
      Fild contacts by name
      <FilterInput
        type="text"
        placeholder="Aleksandr"
        onChange={changeFilter}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
