import $ from 'jquery';

import CAWebModuleProfileBanner from './modules/ProfileBanner';
import CAWebModuleTest from './modules/Test';

/**
 * Register modules to Visual Builder once the API is ready.
 *
 * @since 1.0.0
 */
$(window).on('et_builder_api_ready', (event, API) => {
    // Register modules.
    API.registerModules([
        CAWebModuleProfileBanner,
        CAWebModuleTest,
    ]);
});
