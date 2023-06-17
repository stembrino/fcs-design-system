const template = (componentName) => (
`export { default } from "./${componentName}";`
);
module.exports = template;