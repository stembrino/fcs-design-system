const stories = (componentName) => (
`import type { Meta, StoryObj } from "@storybook/react";

import ${componentName} from "../${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "${componentName}",
  component: ${componentName},
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
  args: {},
};
`
);

const docs = (componentName) => (
`import { Canvas, Meta, Controls, Story } from '@storybook/blocks';
import * as ${componentName} from "./${componentName}.stories";

<Meta of={${componentName}}  />

# ${componentName}
\`\`\`ts
import { ${componentName} } from "fcs-design-system"
\`\`\`

## Code example:

\`\`\`tsx

import { ${componentName} } from "fcs-design-system"

function Example() {
  const handleOnClickButton = () => {
    // do some stuff
  }

  return (
    <>
      <${componentName} />
    </>
  )
}

export default Example;
\`\`\`
  

<Canvas of={${componentName}.Primary} />


<Controls />

# Variants
`
);
module.exports = {stories, docs};