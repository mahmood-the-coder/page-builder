import feather from "feather-icons";

const style=getComputedStyle(document.body);
const color=style.getPropertyValue("--editor-color")
const backgroundColor=style.getPropertyValue("--editor-background-color")
feather.replace({class:"icon",color:color,backgroundColor:backgroundColor})
