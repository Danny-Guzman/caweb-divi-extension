// import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule, getModuleConversionMap, getPossibleModuleConversionOutline } from '@divi/module-library';

import { d4ModuleMetadata, d4Module } from './components/d4-module/index.js';

// import './module-icons';
// const { registerModule , getPossibleModuleConversionOutline} = window?.divi?.moduleLibrary;
// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', () => {
  console.log( 'Registering Modules');
  registerModule(d4ModuleMetadata, d4Module);
  console.log(  'registered'  );
});
