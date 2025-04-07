import "./layout.css"
import { leftContainer } from "./leftContainer";
import { resizeHandle } from "./resizeHandle";
import { rightContainer } from "./rightContainer";
const MIN_WIDTH=50;
const layout=document.createElement("div");
layout.classList.add("editorLayout");

layout.append(leftContainer,rightContainer)
document.body.querySelector(".editor")?.append(layout)


let isResizing=false;
window.addEventListener("mousedown",(e)=>{
      if(e.target==resizeHandle)
      {
           isResizing=true;
      }
})

window.addEventListener("mousemove",(e)=>{
    if(!isResizing)return;
    if(e.clientX<MIN_WIDTH)
    {
        leftContainer.style.width="10px"
        rightContainer.style.width=`calc(100% - 10px)`
        return;
    }
    leftContainer.style.width=e.clientX+"px"
    rightContainer.style.width=`calc(100% - ${e.clientX}px)`
})

window.addEventListener("mouseup",()=>{
    if(!isResizing)return;
    isResizing=false;
})