import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContactsJSON = await fs.readFile(PATH_DB, 'utf-8');

    const existingContacts = existingContactsJSON
      ? JSON.parse(existingContactsJSON)
      : [];

    const newContact = createFakeContact();
    existingContacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2));
    console.log('New contact added successfully.');
  } catch (error) {
    console.error('Failed:', error);
  }
};

addOneContact();
