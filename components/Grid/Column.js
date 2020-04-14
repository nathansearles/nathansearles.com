import styles from "./grid.module.scss";
const Column = (props) => {
  // Define our breakpoint names
  const breakpointLabels = ["xs", "sm", "md", "lg", "xl"];

  // Create array with base Column class
  const classes = [styles.Column];

  // Add breakpoint columns to classes array
  for (let [breakpoint, columns] of Object.entries(props)) {
    if (breakpointLabels.includes(breakpoint)) {
      classes.push(styles[`span-${columns}@${breakpoint}`]);
    }
  }

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default Column;
