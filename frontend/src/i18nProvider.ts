//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Hospitals: {
      name: 'Hospitals',
      fields: {
        name: 'Name',
        location: 'Location',
        totalBeds: 'Total Beds',
        availableBeds: 'Available Beds',
        id: 'id',
      },
    },
    Beds: {
      name: 'Beds',
      fields: {
        bedID: 'Bed Id',
        status: 'Status',
        type: 'Type',
        hospitalID: 'Hospital Id',
        id: 'id',
      },
    },
    Users: {
      name: 'Users',
      fields: {
        userID: 'User Id',
        name: 'Name',
        contactInformation: 'Contact Information',
        medicalHistory: 'Medical History',
        preferredHospital: 'Preferred Hospital',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Hospitals: {
      name: 'Hospitals (fr)',
      fields: {
        name: 'Name (fr)',
        location: 'Location (fr)',
        totalBeds: 'Total Beds (fr)',
        availableBeds: 'Available Beds (fr)',
        id: 'id',
      },
    },
    Beds: {
      name: 'Beds (fr)',
      fields: {
        bedID: 'Bed Id (fr)',
        status: 'Status (fr)',
        type: 'Type (fr)',
        hospitalID: 'Hospital Id (fr)',
        id: 'id',
      },
    },
    Users: {
      name: 'Users (fr)',
      fields: {
        userID: 'User Id (fr)',
        name: 'Name (fr)',
        contactInformation: 'Contact Information (fr)',
        medicalHistory: 'Medical History (fr)',
        preferredHospital: 'Preferred Hospital (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);