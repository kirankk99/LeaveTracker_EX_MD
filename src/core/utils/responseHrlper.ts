//
//
//
export const sendResponse = (
  res: any,
  statusCode: string | number,
  success: boolean,
  message: string,
  data = null,
) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
