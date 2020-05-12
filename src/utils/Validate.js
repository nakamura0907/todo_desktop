const ErrorMessages = {
  required: "必須項目です。",
};

const Regex = {};

export const required = (value) => (value ? undefined : ErrorMessages.required);
