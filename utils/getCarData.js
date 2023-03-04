import { carDataMapping } from './carDataMapping';

export function advToList(data) {
  let list = [];

  for (let key in data) {
    list.push(data[key]);
  }
  return list.reverse();
}

export function makesToList(data) {
  let list = [];

  for (let key in data) {
    list.push(key);
  }
  return carDataMapping(list.reverse());
}

export function getModelList(makes, model) {
  let modelList = [];

  for (let key in makes) {
    if (key === model) modelList = makes[key];
  }
  return carDataMapping(modelList.reverse());
}

export function setYearList() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 1960; i--) {
    years.push(i.toString());
  }
  return carDataMapping(years);
}

export function isValidAdv(adv, filters) {
  return filters.every((filter) => {
    let current = adv[filter.attribute];
    if (filter.attribute === 'price') {
      const start = current.indexOf('₴') + 1;
      // const end = current.indexOf('/');
      current = current.slice(start).replace(/\s+/g, '');
    }
    const to = filter.to ? current <= filter.to : true;
    const from = filter.from ? current >= filter.from : true;

    if (filter.value) return current.search(filter.value) != -1;
    else return from && to;
  });
}