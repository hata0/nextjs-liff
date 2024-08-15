import { Meta, StoryObj } from "@storybook/react";
import { Top } from ".";
import { fn } from "@storybook/test";
import { Liff } from "@line/liff";

type T = typeof Top;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    liff: {
      logout: fn(),
      login: fn(),
    } as unknown as Liff,
    profile: {
      userId: "11111111111111111111",
      displayName: "User",
      pictureUrl: "/image/profile.jpg",
    },
  },
};

export const Empty: Story = {
  args: {
    liff: null,
    profile: null,
  },
};

export default {
  component: Top,
  title: "Features/top/Top",
} satisfies Meta<T>;
