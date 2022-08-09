import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label, ButtonAdd } from './ContactForm.styled';
import * as yup from 'yup';

let initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().min(2).max(25).required('Mandatory field'),
  number: yup
    .number()
    .positive()
    .integer()
    .lessThan(9999999999999)
    .required('Mandatory field'),
});

export const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form
        name="phonebook"
        autoComplete="off"
        style={{ border: '2px solid black', padding: '30px' }}
      >
        <Label htmlFor="">
          Name
          <Field
            placeholder="Rosie Simpson"
            type="text"
            name="name"
            style={{
              display: 'block',
              width: '70%',
              height: '25px',
              marginBottom: '15px',
              marginTop: '5px',
              padding: '5px',
            }}
          />
          <ErrorMessage name="name" component="p" />
        </Label>
        <Label htmlFor="">
          Number
          <Field
            placeholder="459-12-56"
            type="tel"
            name="number"
            style={{
              display: 'block',
              width: '70%',
              height: '25px',
              marginBottom: '15px',
              marginTop: '5px',
              padding: '5px',
            }}
          />
          <ErrorMessage name="number" component="p" />
        </Label>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
