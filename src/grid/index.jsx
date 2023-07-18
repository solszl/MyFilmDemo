/* eslint-disable no-unused-vars */
import React from "react";
import Item from "./item";

import classNames from "classnames";
import styles from "./index.module.css";

const Section = (props) => {
  return (
    <div style={{ width: "100vw" }}>
      <ul className={classNames(styles.Pages, styles["grid"])}>
        {[1, 2, 3, 4, 5].map((i) => {
          return <Item key={i} index={i} id={i} onRemove={() => {}}></Item>;
        })}
      </ul>
    </div>
  );
};

export default Section;
