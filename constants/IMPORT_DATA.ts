interface IMPORT_DATA_LABEL {
  [key: string]: string;
}

export const IMPORT_DATA_LABEL: IMPORT_DATA_LABEL = {
  INDEX: 'index',
  FIRSTNAME: 'firstname',
  LASTNAME: 'lastname',
  SPOUSE_LASTNAME: 'spouse_lastname',
  FAMILY_LASTNAME_01: 'children_lastname_01',
  FAMILY_LASTNAME_02: 'children_lastname_02',
  FAMILY_LASTNAME_03: 'children_lastname_03',
  POSTCODE: 'postalcode',
  ADDRESS_01: 'address_01',
  ADDRESS_02: 'address_02',
  ADDRESS_03: 'address_03',
  MOURNING_FLG: 'mourning_flg',
};

interface IMPORT_DATA_CATEGORY {
  [key: number]: string;
}

export const IMPORT_DATA_CATEGORY: IMPORT_DATA_CATEGORY = {
  0: IMPORT_DATA_LABEL.INDEX,
  1: IMPORT_DATA_LABEL.FIRSTNAME,
  2: IMPORT_DATA_LABEL.LASTNAME,
  3: IMPORT_DATA_LABEL.SPOUSE_LASTNAME,
  4: IMPORT_DATA_LABEL.FAMILY_LASTNAME_01,
  5: IMPORT_DATA_LABEL.FAMILY_LASTNAME_02,
  6: IMPORT_DATA_LABEL.FAMILY_LASTNAME_03,
  7: IMPORT_DATA_LABEL.POSTCODE,
  8: IMPORT_DATA_LABEL.ADDRESS_01,
  9: IMPORT_DATA_LABEL.ADDRESS_02,
  10: IMPORT_DATA_LABEL.ADDRESS_03,
  11: IMPORT_DATA_LABEL.MOURNING_FLG,
};
