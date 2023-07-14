export const getPX = () => {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.width = "1in";
  el.style.right = 0;
  el.style.top = 0;
  el.id = "measure";

  document.body.append(el);
  const { width } = el.getBoundingClientRect();
  el.remove();
  return width;
};
