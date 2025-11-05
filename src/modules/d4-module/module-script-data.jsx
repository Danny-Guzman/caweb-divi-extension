import { Fragment } from 'react';

/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 */
export const ModuleScriptData = ({
  elements,
}) => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);

