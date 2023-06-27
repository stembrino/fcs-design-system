/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
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
  fs.writeFileSync(
    path.join(templatePath, `${componentName}.tsx`),
    componentTemplate(componentName)
  );
}

function createTypesTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `types.ts`), types.template(componentName));
}

function createTypesTemplateWithVariants(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `types.ts`), types.templateWithVariants(componentName));
}

function createStylesTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `styles.module.css`), stylesTemplate(componentName));
}

function createVariantsTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `variants.ts`), variantsTemplate(componentName));
}

function createTestTemplate(componentName, templatePath) {
  fs.mkdirSync(`${templatePath}/_tests`, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `_tests/${componentName}.test.tsx`),
    testTemplate(componentName)
  );
}

function createIndexTemplate(componentName, templatePath) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, "index.ts"), indexTemplate(componentName));
}

function createStorybookTemplate(componentName, templatePath) {
  fs.mkdirSync(`${templatePath}/_storybook/`, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `_storybook/${componentName}.stories.tsx`),
    storybookTemplate.stories(componentName)
  );
  fs.writeFileSync(
    path.join(templatePath, `_storybook/${componentName}.mdx`),
    storybookTemplate.docs(componentName)
  );
}

module.exports = {
  createComponentTemplate,
  createTypesTemplate,
  createTypesTemplateWithVariants,
  createStylesTemplate,
  createVariantsTemplate,
  createTestTemplate,
  createIndexTemplate,
  createStorybookTemplate,
};
