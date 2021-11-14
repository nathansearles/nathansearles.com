/**
 * Helper function to clean up and join class names
 * @param {array} classNames - can be a string or styles.image
 */
export const classNames = (classNames) => {
  const removeUndefined = classNames.filter((n) => n);
  const joinClassNames = removeUndefined.join(" ");
  return joinClassNames;
};
