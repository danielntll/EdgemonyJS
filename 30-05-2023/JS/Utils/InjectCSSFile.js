export const injectCss = (filePath) => {
  let link = document.createElement("link");
  link.href = filePath;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName("head")[0].appendChild(link);
}