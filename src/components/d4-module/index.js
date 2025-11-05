// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
// import {
//   type Metadata,
//   type ModuleLibrary,
// } from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { D4ModuleEdit } from './edit';
// import { D4ModuleAttrs } from './types';
// import { placeholderContent } from './placeholder-content';
import { conversionOutline } from './conversion-outline';

export const d4ModuleMetadata = metadata;


export const d4Module = {
  conversionOutline,
  // placeholderContent,
  renderers: {
    edit: D4ModuleEdit,
  },
};
