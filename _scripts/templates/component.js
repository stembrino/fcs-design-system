const template = (componentName) => (
`import React from "react";
import styles from "./${componentName}.module.css";
import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <>
      <div>{/* Component code here */}</div>
    </>
  );
};

export default ${componentName};
`);

module.exports = template;