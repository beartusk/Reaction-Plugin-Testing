import React, { Component } from "react";
import { replaceComponent } from "/imports/plugins/core/layout/lib/components";

const MyCustomNavbar = (props) => (
  <nav>
    <Components.Brand />

    <div>
      custom stuff here...
    </div>

    <Components.Button>
      Click Me!
    </Components.Button>

    <Components.MainDropdown />
  </nav>
);


replaceComponent("NavBar", MyCustomNavbar);
