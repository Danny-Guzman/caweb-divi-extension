// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import metadata from './module.json';


const customCssFields = metadata.customCssFields;
//  as Record<'title' | 'content', { subName, selectorSuffix, label }>;

customCssFields.title.label            = __('Title', 'd5-extension-example-modules');
customCssFields.content.label          = __('Content', 'd5-extension-example-modules');

export const cssFields = { ...customCssFields };
