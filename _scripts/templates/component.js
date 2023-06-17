const template = (componentName) => (
`import React from "react";
import styles from "./styles.module.css";
import { ${componentName}Props } from "./types";

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