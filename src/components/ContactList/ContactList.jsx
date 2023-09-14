import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/ContactsSlice/ContactsSlice';
import { getContacts } from '../../Redux/selectors';
import { getFilter } from '../../Redux/selectors';
import css from './ContactList.module.css'


const getContactList = (contacts, statusFilter) => {
  if (statusFilter.value !== '') {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(statusFilter.value.toLowerCase())
    );
  }

  return contacts;
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterUser = useSelector(getFilter);
  const contactsList = getContactList(contacts, filterUser);

  const handleDelete = () => dispatch(deleteContact(contacts.id));
    return (
        <ul className={css.listContainer}>
            {contactsList.map(({ id, name, number }) =>
            (<li className={css.contactItem} key={id}>
                <p>{name}:{number}</p> 
                <button className={css.btnDelete} type ='button' onClick={() => handleDelete(id)}></button>
            </li>))}
        </ul>
    )
}


