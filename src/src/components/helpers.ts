/* CREATE COMPONENT */
export const createComponent = (component: string, properties: Object, text: string, parent?: any) => {
  let el = document.createElement(component);
  Object.keys(properties).forEach(prop => el.setAttribute(prop, properties[prop]));
  el.innerText = text;
  if (parent) {
    parent.appendChild(el);
  }
  return el;
};