export function formatData(data) {
  let formattedArr = [];

  for (let key in data) {
    formattedArr.push(data[key]);
  }
  return formattedArr.reverse();
}

export function formatMakes(data) {
  let formattedArr = [];

  for (let key in data) {
    formattedArr.push(key);
  }
  return formattedArr.reverse();
}

export function getModels(makes, model) {
  let modelList = [];

  for (let key in makes) {
    if (key === model) modelList = makes[key];
  }
  return modelList.reverse();
}
