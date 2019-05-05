import React from "react";
import { shallow } from "enzyme";

import ArtistSearchResults from "./ArtistSearchResults";

describe("<ArtistSearchResults />", () => {
  it("Renders without crashing", () => {
    const artists = [
      {
        id: "5cbfe163fd534900170cce05",
        user: test
      },
      {
        id: "5cbfe163fd534900170cce05",
        user: test
      }
    ];
    shallow(<ArtistSearchResults artists={artists} />);
  });
});
