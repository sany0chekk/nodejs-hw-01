import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const existingContactsJSON = await fs.readFile(PATH_DB, 'utf-8');

  const existingContacts = existingContactsJSON
    ? JSON.parse(existingContactsJSON)
    : [];

  const generatedContacts = Array(number).fill(0).map(createFakeContact);
  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...existingContacts, ...generatedContacts], null, 2),
  );
};

generateContacts(5);
