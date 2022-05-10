export const cropAddress = (address: string): string => {
  if (!address) return "";
  return address?.substring(2, 6) + " ... " + address?.substring(address.length - 4);
};
