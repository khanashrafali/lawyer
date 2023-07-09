export const REGX = {
  Alpha: /^[a-zA-Z ]*$/,
  Password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-])[A-Za-z\d|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-]{8,}$/,
  PasswordMsg:
    "Password must be at least 8 digits and it should have 1 uppercase, 1 lowercase, 1 number and 1 special character",
  MobileNumber: /^[789]\d{9}$/,
  Alphanumeric: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9 ]*$/,
  Address: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&,() ]*$/,
  GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  PositiveInteger: /^[1-9]\d*$/,
};
