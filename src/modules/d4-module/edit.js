// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.

// Local Dependencies.
// import { D4ModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';
import { getAttrByMode } from '@divi/module-utils';
import { ModuleContainer } from '@divi/module';
/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 *
 * @returns {ReactElement}
 */
export const D4ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {
console.log( attrs );
  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div className="example_d4_module_inner">
        {elements.render({
          attrName: 'title',
        })}
        {elements.render({
          attrName: 'content',
        })}
      </div>
    </ModuleContainer>
  );
}

