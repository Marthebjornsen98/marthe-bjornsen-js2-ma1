export const filteringArray = (array, filterString) => {
  return array.filter((arrayElm) => {
    return arrayElm.price <= parseInt(filterString);
  });
};
