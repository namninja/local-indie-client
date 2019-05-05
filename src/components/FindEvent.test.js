import React from "react";
import { shallow } from "enzyme";

import FindEvent from "./FindEvent";

describe("<FindEvent />", () => {
  it("Renders without crashing", () => {
    shallow(<FindEvent />);
  });
});
