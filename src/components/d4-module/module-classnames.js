
const {
    elementClassnames,
    textOptionsClassnames,
  } = window?.divi?.module;

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
