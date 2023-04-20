export const formatForSelect = (data, startValue) => {
  const res = startValue ? [{ value: '', label: startValue }] : [];
  data?.forEach((item) => res.push({ value: item.toLowerCase(), label: item }));
  return res;
};

export const objToList = (data) => {
  if (data) {
    return Object.values(data).reverse();
  } else return null;
};

export const getYearList = (year, label = null) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= +year; i--) {
    years.push(i.toString());
  }
  return formatForSelect(years, label);
};

export const getPriceList = (maxPrice, label = null) => {
  const price = [];
  for (let i = 1000; i <= +maxPrice; i += 1000) {
    price.push(i.toString());
  }
  return formatForSelect(price, label);
};
