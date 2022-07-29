export const loadImage = (imageElement: any) =>
  require(`public/images/${imageElement.props.children.props.src}`).default;

export const getURL = (linkElement: any) =>
  linkElement.props.children.props.href;
