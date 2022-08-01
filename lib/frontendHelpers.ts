export const loadImage = (imageElement: any) =>
  require(`public/images/${imageElement.props.children.props.src}`).default;

export const getURL = (linkElement: any) =>
  linkElement.props.children.props.href;

export const getImagePath = (imageElement: any) =>
  `public/images/${imageElement.props.children.props.src}`;
