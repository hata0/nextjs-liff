import { fn } from "@storybook/test";

import { Top } from ".";

import { putCountUpHandler } from "@/services/backend/count-up/mock";
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
  beforeEach: () => {
    (LIFF.getIDToken as ReturnType<typeof fn>).mockReturnValue("idToken");
  },
};

export const Empty: Story = {};

export default {
  component: Top,
  parameters: {
    msw: {
      handlers: [putCountUpHandler()],
    },
  },
  title: "Features/top/Top",
} satisfies Meta<T>;
