import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const existingContactsJSON = await fs.readFile(PATH_DB, 'utf-8');
    return existingContactsJSON
      ? JSON.parse(existingContactsJSON).length
      : null;
  } catch (error) {
    console.error('Failed:', error);
    return null;
  }
};

console.log(await countContacts());
