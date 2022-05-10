export const cropAddress = (address: string): string => {
  if (!address) return "";
  return address?.substring(2, 6) + " ... " + address?.substring(address.length - 4);
};

export const timestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
};
