export const errorHandler = (statusCode, message) => {
  const erorr = new Error()
  erorr.statusCode = statusCode
  erorr.message = message
  return erorr
} 