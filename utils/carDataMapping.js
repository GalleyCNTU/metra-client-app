export const carDataMapping = (data) => {
    return data.map(item => {
        const carItem = {};
        carItem.value = item.toLowerCase();
        carItem.label = item;
        return carItem;
    })
}