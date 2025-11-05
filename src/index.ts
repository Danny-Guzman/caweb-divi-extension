import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule } from '@divi/module-library';

// import { childModule } from './components/child-module';
// import { d4Module } from './components/d4-module';
// import { dynamicModule } from './components/dynamic-module';
// import { parentModule } from './components/parent-module';
// import { staticModule } from './components/static-module';
import { CAWebModuleProfileBanner } from './modules/ProfileBanner';
// import './module-icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', () => {
  console.log( 'Registering Modules');
  registerModule(CAWebModuleProfileBanner.metadata, omit(CAWebModuleProfileBanner, 'metadata'));
});
