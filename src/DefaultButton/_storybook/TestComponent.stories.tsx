import React from "react";
import TestComponent from "..";

export default {
  title: "TestComponent",
};

const Template = () => <TestComponent label="I am a test component" />;

export const WithButton = Template.bind({});
