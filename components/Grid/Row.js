import styles from "./grid.module.scss";
const Row = (props) => {
  // Define our breakpoint names
  const breakpointLabels = ["xs", "sm", "md", "lg", "xl"];

  // Create array with base Row class
  const classes = [styles.Row];

  // Add justify class
  if (props.justify) {
    classes.push(styles[`justify-${props.justify}`]);
  }

  if (props.className) {
    classes.push(props.className);
  }

  // Add text align
  if (props.text) {
    classes.push(styles[`text-${props.text}`]);
  }

  // Add breakpoint columns to classes array
  // for (let [breakpoint, columns] of Object.entries(props)) {
  //   if (breakpointLabels.includes(breakpoint)) {
  //     classes.push(styles[`span-${columns}@${breakpoint}`]);
  //   }
  // }

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default Row;
