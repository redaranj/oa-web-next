export const getImagePath = (image: string) => {
  const basePath = process.env.CI ? "/web-next" : "";

  return `${basePath}/images/${image}`;
};
