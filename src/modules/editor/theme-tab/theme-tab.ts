import { themTabButton } from "./theme-tab-button";

export const themeTab=document.createElement("div");
themeTab.classList.add("themeTab","tab");
document.body.querySelector(".tabsButtons")?.append(themTabButton)
document.body.querySelector(".tabs")?.append(themeTab)

