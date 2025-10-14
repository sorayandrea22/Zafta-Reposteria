export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "Something went wrong",
) => {
  console.log(error);
  let errorMessage = defaultMessage;
  if (error instanceof Error && error.message.length < 100) {
    errorMessage = error.message;
  }
  return errorMessage;
};
