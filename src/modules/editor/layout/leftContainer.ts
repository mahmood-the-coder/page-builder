import { resizeHandle } from "./resizeHandle";

export const leftContainer = document.createElement("div");
leftContainer.classList.add("editorLayoutLeft");
leftContainer.append(resizeHandle);
