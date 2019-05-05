import React from "react";
import { shallow } from "enzyme";

import EventLink from "./EventLink";

describe("<EventLink />", () => {
  it("Renders without crashing", () => {
    shallow(<EventLink />);
  });
});
