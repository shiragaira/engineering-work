export const emailDoesntExistResponse = {
  message: { code: 'EMAIL_DOESNT_EXIST', severity: 'ERROR' },
}
export const emailExistResponse = {
  message: {
    code: 'EMAIL_EXIST',
    severity: 'SUCCESS',
  },
}
export const invalidRegisterKeyResponse = {
  message: {
    code: 'INVALID_SECRET_KEY',
    severity: 'ERROR',
  },
}
export const validRegisterKeyResponse = {
  message: {
    code: 'VALID_SECRET_KEY',
    severity: 'SUCCESS',
  },
}
