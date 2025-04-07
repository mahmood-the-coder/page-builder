import "./tools-tab.css"
import { setCurrentTab } from "../tabs/tabs.ts";
import { toolsTabButton } from "./tools-tab-button.ts";

export const toolsTab=document.createElement("div");
toolsTab.classList.add("toolsTab","tab");
toolsTab.style.display="flex"

document.body.querySelector(".tabs")?.append(toolsTab)
setCurrentTab(toolsTab)
document.body.querySelector(".tabsButtons")?.append(toolsTabButton)
