export function isValidAdv(adv, filters) {
  return filters.every((filter) => {
    let current = adv[filter.attribute];
    if (filter.attribute === 'price') {
      const start = current.indexOf('₴') + 1;
      // const end = current.indexOf('/');
      current = current.slice(start).replace(/\s+/g, '');
    }
    const to = filter.to ? +current <= +filter.to : true;
    const from = filter.from ? +current >= +filter.from : true;

    if (filter.value)
      return current.toLowerCase().search(filter.value.toLowerCase()) != -1;
    else return from && to;
  });
}

export function setNormBoundaries(dependent, { from, to }) {
  let limit = { from, to };
  if (!from || !to) return limit;
  if (+from > +to) {
    if (dependent === 'from') limit.from = to;
    else limit.to = from;
  }
  return limit;
}
