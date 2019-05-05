import React from "react";
import { shallow } from "enzyme";

import Artist from "./Artist";

describe("<Artist />", () => {
  it("Renders without crashing", () => {
    const match = {
      params: {
        baseId: "5cbfe163fd534900170cce05" //any id you want to set
      }
    };
    shallow(<Artist match={match} />);
  });
});
