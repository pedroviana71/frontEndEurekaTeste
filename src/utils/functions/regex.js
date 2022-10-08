export const regexCEP = (number) => {
  number.currentTarget.maxLength = 9;
  let value = number.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  number.currentTarget.value = value;
  return number.currentTarget.value;
};
