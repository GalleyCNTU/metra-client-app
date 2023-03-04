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
  for (let i = currentYear; i >= 1900; i--) {
    years.push(i.toString());
  }
  return carDataMapping(years);
}
