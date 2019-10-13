import { configure } from "@storybook/react";
import "../assets/react-accessible-form.css";
import "./sample-theme.css";
import "../node_modules/pretty-checkbox/dist/pretty-checkbox.css";
function loadStories() {
    require("../stories/index.tsx");
}

configure(loadStories, module);
