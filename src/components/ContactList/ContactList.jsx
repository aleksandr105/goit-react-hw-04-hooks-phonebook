import { List, ButtonDelete, Item, ItemText } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ visibalFiltr, deleteContact }) => {
  return (
    <List>
      {visibalFiltr.map(({ id, name, number }, index) => (
        <Item key={id}>
          {index + 1}.
          <ItemText>
            {name}: {number}
          </ItemText>
          <ButtonDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  visibalFiltr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
