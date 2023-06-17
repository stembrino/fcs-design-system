const fs = require("fs");
const path = require("path");
const componentTemplate = require("./templates/component");
const types = require("./templates/types");
const stylesTemplate = require("./templates/styles");
const variantsTemplate = require("./templates/variants");
const testTemplate = require("./templates/test");
const indexTemplate = require("./templates/index");
const storybookTemplate = require("./templates/storybook");


function createComponentTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `${componentName}.tsx`), componentTemplate(componentName));
}

function createTypesTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `${componentName}.types.ts`), types.template(componentName));
}

function createTypesTemplateWithVariants(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `${componentName}.types.ts`), types.templateWithVariants(componentName));
}

function createStylesTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `${componentName}.module.css`), stylesTemplate(componentName));
}

function createVariantsTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `${componentName}.variants.ts`), variantsTemplate(componentName));
}

function createTestTemplate(componentName, templatePath) {
  fs.mkdirSync(`${templatePath}/_tests`, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `_tests/${componentName}.test.tsx`), testTemplate(componentName));
}

function createIndexTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, "index.ts"), indexTemplate(componentName));
}

function createStorybookTemplate(componentName, templatePath) {
  fs.mkdirSync(`${templatePath}/_storybook/`, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `_storybook/${componentName}.stories.tsx`), storybookTemplate.stories(componentName));
  fs.writeFileSync(path.join(templatePath, `_storybook/${componentName}.mdx`), storybookTemplate.docs(componentName));
}

const hasStorybook =  process.argv[2] === "true" ? true : false;
const componentName = process.argv[3];
const hasVariants =  process.argv[4] === "true" ? true : false;
const templatePathParam = process.argv[5];

const componentPath = templatePathParam ? `src/${templatePathParam}/`: "src";
const templatePath = path.join(__dirname, "..", componentPath, componentName);

hasStorybook && createStorybookTemplate(componentName, templatePath);
createStylesTemplate(componentName, templatePath);
createComponentTemplate(componentName, templatePath);
createIndexTemplate(componentName, templatePath);
createTestTemplate(componentName, templatePath);
if (hasVariants) {
  createVariantsTemplate(componentName, templatePath);
  createTypesTemplateWithVariants(componentName, templatePath);
  return;
}
createTypesTemplate(componentName, templatePath);



