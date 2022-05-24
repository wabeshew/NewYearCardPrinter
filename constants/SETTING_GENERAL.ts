interface SETTING_GENERAL_INFO {
    [key: string]: string;
  }

export const SETTING_GENERAL_INFO: SETTING_GENERAL_INFO = {
    '宛先郵便番号': 'tozip',
    '宛名': 'toname',
    '宛先': 'toaddress',
    '差出人郵便番号': 'fromzip',
    '差出人名': 'fromname',
    '差出人住所': 'fromaddress',
};

export const SETTING_GENERAL_LABEL: string[] = Object.keys(SETTING_GENERAL_INFO);
