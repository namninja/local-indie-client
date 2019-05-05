import React from "react";
import { shallow } from "enzyme";

import BrowseArtists from "./BrowseArtists";

describe("<BrowseArtists />", () => {
  it("Renders without crashing", () => {
    shallow(<BrowseArtists />);
  });
});
