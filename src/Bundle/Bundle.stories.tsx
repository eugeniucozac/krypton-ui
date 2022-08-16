import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Bundle from "./Bundle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Bundle",
  component: Bundle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Bundle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Bundle> = (args) => <Bundle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: "Bundle",
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: "Bundle",
};

export const Large = Template.bind({});
Large.args = {
  // size: "large",
  // label: "Bundle",
};

export const Small = Template.bind({});
Small.args = {
  //  size: "small",
  // label: "Bundle",
};
