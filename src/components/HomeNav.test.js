import React from "react";
import { shallow } from "enzyme";

import HomeNav from "./HomeNav";

describe("<HomeNav />", () => {
  it("Renders without crashing", () => {
    shallow(<HomeNav />);
  });
});
