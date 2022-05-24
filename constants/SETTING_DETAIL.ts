interface SETTING_DETAIL_INFO {
    [key: string]: string;
  }

export const SETTING_DETAIL_INFO: SETTING_DETAIL_INFO = {
    '宛名': 'toname',
    '宛先': 'toaddress',
    '差出人名': 'fromname',
    '差出人住所': 'fromaddress',
};

export const SETTING_DETAIL_LABEL: string[] = Object.keys(SETTING_DETAIL_INFO);
