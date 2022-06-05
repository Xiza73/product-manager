export const currencyFormat = (value: number, currency: string) => {
  const formatter = currency === "USD" ? "en-US" : "es-PE";
  return new Intl.NumberFormat(formatter, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};

export const priceFormat = (value: string) => {
  const maxLength = 7;
  value = value.replace(/[^0-9.]/g, "");
  value = value.replace(/^\./g, "");
  value = value.replace(/\.{2,}/g, ".");
  value = value.replace(/\..*\./g, ".");
  if (value.length > 1 && value[1] !== ".") value = value.replace(/^0+/g, "");
  value = value.replace(/\.\d{3,}/, "." + value.split(".")[1]?.slice(0, 2));
  // value = value.replace(/\d{8,}/, value.substring(0, 7));
  if (value.length > maxLength && value[maxLength] !== ".")
    value = value.slice(0, maxLength);
  value = value === "" ? "0" : value;
  return value;
};

export const isValidUrl = (url: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
};
