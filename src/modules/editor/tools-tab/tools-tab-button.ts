import { findAncestor } from "../../../utils/find-ancestor";
import {  toTab } from "../tabs/tabs";
import { toolsTab } from "./tools-tab";

export const toolsTabButton = document.createElement("div");
toolsTabButton.classList.add("toolsTabButton");
const icon=document.createElement("i");
icon.dataset.feather="tool"
toolsTabButton.append(icon);

window.addEventListener("mousedown", (e) => {
    const target=findAncestor(e.target as HTMLElement,".toolsTabButton")
    if (target) {
        toTab(toolsTab)
    }
});


