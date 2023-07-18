/* eslint-disable react/display-name */
import classNames from "classnames";
import { forwardRef } from "react";

import styles from "./item.module.css";

const Layout = {
  Horizontal: "horizontal",
  Vertical: "vertical",
  Grid: "grid",
};

const Position = {
  Before: -1,
  After: 1,
};
const Item = forwardRef(
  (
    {
      active = false,
      clone = true,
      insertPosition,
      layout = "grid",
      style,
      id,
      index,
      onRemove,
      ...props
    },
    ref
  ) => {
    return (
      <li
        className={classNames(
          styles.Wrapper,
          active && styles.active,
          clone && styles.clone,
          insertPosition === Position.Before && styles.insertBefore,
          insertPosition === Position.After && styles.insertAfter,
          layout === Layout.Grid && styles.Grid
        )}
        style={style}
        ref={ref}
      >
        <button className={styles.Page} data-id={String(id)} {...props} />
        {!active && onRemove ? (
          <button className={styles.Remove} onClick={onRemove}>
            {"x"}
          </button>
        ) : null}
        {index != null ? (
          <span className={styles.PageNumber}>{index}</span>
        ) : null}
      </li>
    );
  }
);

export default Item;
