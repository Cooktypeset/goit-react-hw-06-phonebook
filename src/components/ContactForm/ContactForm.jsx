import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from '../../Redux/ContactsSlice/ContactsSlice';
import { getContacts } from '../../Redux/selectors';

import css from "./ContactForm.module.css";

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   // onSubmit({ name: name, number: number });
  //   // reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };
 const handleSubmit = event => {
    event.preventDefault();
    const newContact = {};

    if (event.currentTarget.name)
      newContact.name = event.currentTarget.name.value;
    if (event.currentTarget.number)
      newContact.number = event.currentTarget.number.value;

    const checkList = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
      );
    });
    if (checkList) {
      alert(
        `${newContact.name}, number: ${newContact.number} is already in contacts !`
      );
      event.currentTarget.reset();
      return;
    }
    dispatch(addContact(newContact.name, newContact.number));
    event.currentTarget.reset();
  };

    return(
     <form  className={css.form}  onSubmit={handleSubmit}>
        <label className={css.subTitle}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            // value={name}
            // onChange={handleChange}
          />
        </label>

        <label className={css.subTitle}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter your number"
            // value={number}
                // onChange={handleChange}
             required
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }


// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };