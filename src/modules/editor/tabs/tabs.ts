import "./tabs.css";
import { tabsButtons } from "./tabsButtons.ts";

let currentTab: HTMLElement;

export function getCurrentTab() {
  return currentTab;
}

export function setCurrentTab(newTab: HTMLElement) {
  currentTab = newTab;
}
const tabs = document.createElement("div");
tabs.classList.add("tabs");

tabs.append(tabsButtons);
document.body.querySelector(".editorLayoutLeft")?.append(tabs);

export function toTab(tab: HTMLElement) {
  if (currentTab == tab) return;
  currentTab.style.display = "none";
  setCurrentTab(tab);
  tab.style.display = "flex";
}
