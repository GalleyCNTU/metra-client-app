export const getRandomKey = (id) => {
    return new Date().getMilliseconds() + (Math.random() * 1000);
}