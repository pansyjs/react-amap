export const randomIndex = (len) => (Math.floor(Math.random() * len));

export const randomColor = () => {
  const chars = '0123456789abcdef'.split('');
  const len = chars.length;
  return `#${chars[randomIndex(len)]}${chars[randomIndex(len)]}`
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`;
};
