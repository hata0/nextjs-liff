import { Top } from ".";

import { LIFF } from "@/tests/mocks/liff";
import { PROFILE } from "@/tests/mocks/profile";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Top;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    liff: LIFF,
    profile: PROFILE,
  },
};

export const Empty: Story = {};

export default {
  component: Top,
  title: "Features/top/Top",
} satisfies Meta<T>;
