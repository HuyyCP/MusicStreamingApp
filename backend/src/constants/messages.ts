export const AUTH_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  ROLE_IS_REQUIRED: 'Role is required',
  ROLE_MUST_BE_A_STRING: 'Role must be a string',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_A_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Name length must be from 1 to 100',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_FROM_10_TO_50: 'Password length must be from 10 to 50',
  PASSWORD_MUST_BE_STRONG:
    'Password must be 10-50 characters long and contain at least 1 character, 1 digit, and 1 special character',
  GENDER_IS_REQUIRED: 'Gender is required',
  GENDER_MUST_BE_A_STRING: 'Gender must be a string',
  REGISTER_SUCCESS: 'Register success',
  LOGIN_SUCCESS: 'Login success',
  GET_LIST_EMAIL_SUCCESS: 'Get list email success',
  CHECK_EMAIL_SUCCESS: 'Check email success',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  REFRESH_TOKEN_IS_INVALID: 'Refresh token is invalid',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',
  LOGOUT_SUCCESS: 'Logout success',
  EMAIL_VERIFY_TOKEN_IS_REQUIRED: 'Email verify token is required',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',
  EMAIL_VERIFY_SUCCESS: 'Email verify success',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resend verify email success'
} as const
