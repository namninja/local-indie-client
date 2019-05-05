import React from "react";
import { shallow } from "enzyme";

import Signup from "./Signup";

describe("<Signup />", () => {
  it("Renders without crashing", () => {
    shallow(<Signup />);
  });
});
