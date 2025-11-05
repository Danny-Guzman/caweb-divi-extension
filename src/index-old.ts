import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule, getModuleConversionMap, getPossibleModuleConversionOutline } from '@divi/module-library';

import { d4Module } from './components/d4-module';

import './module-icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', () => {
  console.log( 'Registering Modules');
  // registerModule(d4Module.metadata, omit(d4Module, 'metadata'));
  console.log( getPossibleModuleConversionOutline('et_pb_profile_banner') );
});
