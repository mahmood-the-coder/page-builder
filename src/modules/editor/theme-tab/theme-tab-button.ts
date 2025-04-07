import { findAncestor } from "../../../utils/find-ancestor";
import {  toTab } from "../tabs/tabs";
import { themeTab } from "./theme-tab";

export const themTabButton = document.createElement("div");
themTabButton.classList.add("themTabButton");
const icon=document.createElement("i");
icon.dataset.feather="archive"
themTabButton.append(icon);

window.addEventListener("mousedown", (e) => {
    const target=findAncestor(e.target as HTMLElement,".themTabButton")
    if (target) {
        toTab(themeTab)
    }
});

