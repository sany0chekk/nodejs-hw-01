import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const existingContactsJSON = await fs.readFile(PATH_DB, 'utf-8');
    return existingContactsJSON ? JSON.parse(existingContactsJSON) : [];
  } catch (error) {
    console.error('Failed:', error);
    return [];
  }
};

console.log(await getAllContacts());
