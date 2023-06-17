const template = (componentName) => (
`import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "..";
import { ${componentName}Props } from "../${componentName}.types";

describe("TestComponent", () => {
  // eslint-disable-next-line no-empty-pattern
  const renderComponent = ({}: Partial<${componentName}Props>) => {
    const onClickMock = jest.fn();
    const { container } = render(<${componentName} onClick={onClickMock} />);

    return {
      container,
      onClickMock,
    };
  };

  it("should snapshot match", () => {
    const { container } = renderComponent({});

    expect(container).toMatchSnapshot();
  });
});
`);

module.exports = template;