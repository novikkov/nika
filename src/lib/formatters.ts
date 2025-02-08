export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  if (
    cleaned.length === 11 &&
    (cleaned.startsWith("7") || cleaned.startsWith("8"))
  ) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
  }

  return phone;
};
