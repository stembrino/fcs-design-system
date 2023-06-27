/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const inquirer = require("inquirer");

async function startPrompt() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "hasStorybook",
      message: "Do you want to enable Storybook?",
      default: true,
    },
    {
      type: "input",
      name: "componentName",
      message: "Enter the component name:",
      validate: function (value) {
        if (value.trim().length === 0) {
          return "Component name is required";
        }
        return true;
      },
    },
    {
      type: "confirm",
      name: "isChildComponent",
      message: "Is a child component?",
      default: false,
    },
    {
      type: "input",
      name: "templatePathParam",
      message: "Enter the parent component name:",
      suffix: " (e.g., Card/Footer)",
      when: (answers) => answers.isChildComponent === true,
    },
  ]);

  return answers;
}

module.exports = startPrompt;
