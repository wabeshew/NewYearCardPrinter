interface SETTING_IMPUT_VALIDATE {
  [key: string]: {};
}

export const SETTING_IMPUT_VALIDATE: SETTING_IMPUT_VALIDATE = {
  mimeType: {
    csv: ['application/vnd.ms-excel', 'text/csv'],
  },
};
