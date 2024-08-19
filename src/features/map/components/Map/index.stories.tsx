import { fn } from "@storybook/test";

import { Map } from ".";

import { getNearbyPlacesHandler } from "@/services/backend/places/nearby/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Map;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    liff: LIFF,
  },
  beforeEach: () => {
    (LIFF.getIDToken as ReturnType<typeof fn>).mockReturnValue("idToken");
  },
  parameters: {
    msw: {
      handlers: [getNearbyPlacesHandler()],
    },
  },
};

export const EmptyIDToken: Story = {};

export default {
  component: Map,
  title: "Features/map/Map",
} satisfies Meta<T>;
