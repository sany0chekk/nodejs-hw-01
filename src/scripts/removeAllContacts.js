import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts have been removed');
  } catch (error) {
    console.log('Failed:', error);
  }
};

removeAllContacts();
