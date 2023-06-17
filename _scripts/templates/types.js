const template = (componentName) => (
`export interface ${componentName}Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
`);

const templateWithVariants = (componentName) => (
`import { type VariantProps } from "class-variance-authority";
import { variants } from "./variants";

export interface ${componentName}Props extends VariantProps<typeof variants> {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
`);

module.exports = {template, templateWithVariants};