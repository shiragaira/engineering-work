export const errorResponse = (error: any) => ({
  message: {
    code: 'INTERNAL_ERROR',
    severity: 'ERROR',
  },
  content: {
    error,
  },
})
