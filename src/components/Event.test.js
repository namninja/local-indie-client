import React from "react";
import { shallow } from "enzyme";

import Event from "./Event";

describe("<Event />", () => {
  it("Renders without crashing", () => {
    const match = {
      params: {
        baseId: "5cbfe163fd534900170cce05" //any id you want to set
      }
    };
    shallow(<Event match={match} />);
  });
});
