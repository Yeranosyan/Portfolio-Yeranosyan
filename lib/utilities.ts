export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string; // Return message of type string
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message); // Advanced solution - whatever we get from error message convert to string
  } else if (typeof error === "string") {
    return (message = error);
  } else {
    message = "Something went wrong";
  }
  return message;
};
