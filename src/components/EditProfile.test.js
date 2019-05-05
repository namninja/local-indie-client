import React from "react";
import { shallow } from "enzyme";

import EditProfile from "./EditProfile";

describe("<EditProfile />", () => {
  it("Renders without crashing", () => {
    shallow(<EditProfile />);
  });
});
