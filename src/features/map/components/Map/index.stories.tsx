import { fn } from "@storybook/test";
import { HttpResponse } from "msw";

import { Map } from ".";

import { getNearbyPlacesHandler } from "@/services/backend/places/nearby/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Map;
type Story = StoryObj<T>;

export const Default: Story = {};

export const EmptyIDToken: Story = {
  beforeEach: () => {
    (LIFF.getIDToken as ReturnType<typeof fn>).mockReturnValue(null);
  },
};

export const EmptyPlacesData: Story = {
  parameters: {
    msw: {
      handlers: [
        getNearbyPlacesHandler({
          resolver: ({ request }) => {
            request.headers.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });
            return HttpResponse.json([]);
          },
        }),
      ],
    },
  },
};

export default {
  args: {
    liff: LIFF,
  },
  beforeEach: () => {
    (LIFF.getIDToken as ReturnType<typeof fn>).mockReturnValue("idToken");
  },
  component: Map,
  parameters: {
    msw: {
      handlers: [getNearbyPlacesHandler()],
    },
  },
  title: "Features/map/Map",
} satisfies Meta<T>;
