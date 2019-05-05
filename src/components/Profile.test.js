import React from "react";
import { shallow } from "enzyme";

import Profile from "./Profile";

describe("<Profile />", () => {
  it("Renders without crashing", () => {
    const match = {
      params: {
        baseId: "5cbfe163fd534900170cce05" //any id you want to set
      }
    };
    shallow(<Profile match={match} />);
  });
});
