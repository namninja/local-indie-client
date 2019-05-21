import React from "react";
import { shallow } from "enzyme";

import PostEvent from "./PostEvent";

describe("<PostEvent />", () => {
  it("Renders without crashing", () => {
    shallow(<PostEvent />);
  });
});
