export const getPX = () => {
  const el = document.createElement("div");
  el.style.cssText = `position:absolute; width:1in; right:0; top:0;`;
  el.id = "measure";

  document.body.append(el);
  const { width } = el.getBoundingClientRect();
  el.remove();
  return width;
};

const MM_PER_INCH = 25.4;

// 8inch =8 * px_per_in = 8 * getPX() = 8 * 96 * devicePixelRatio = 8 * 96 * 1;
// A3 = [297, 420] = [297/25.4, 420/25.4] = 11.7inch * 16.5inch = 参考上面这个
