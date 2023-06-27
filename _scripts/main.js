/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const startPrompt = require("./prompt");
const templates = require("./templates");

async function createTemplates({ hasStorybook, componentName, templatePathParam }) {
  console.info("INFO: has storybook:", hasStorybook);
  console.info("INFO: component name:", componentName);
  console.info("INFO: template path param:", templatePathParam);

  const componentPath = templatePathParam ? `src/${templatePathParam}/` : "src";
  const templatePath = path.join(__dirname, "..", componentPath, componentName);

  hasStorybook && templates.createStorybookTemplate(componentName, templatePath);
  templates.createStylesTemplate(componentName, templatePath);
  templates.createComponentTemplate(componentName, templatePath);
  templates.createIndexTemplate(componentName, templatePath);
  templates.createTestTemplate(componentName, templatePath);
  templates.createTypesTemplate(componentName, templatePath);
}

async function main() {
  const answers = await startPrompt();
  createTemplates(answers);
}

main();
