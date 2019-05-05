import React from "react";
import { shallow } from "enzyme";

import ArtistLink from "./ArtistLink";

describe("<ArtistLink />", () => {
  it("Renders without crashing", () => {
    shallow(<ArtistLink />);
  });
});
