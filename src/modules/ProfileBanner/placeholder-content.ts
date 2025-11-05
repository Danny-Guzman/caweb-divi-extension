// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';

// Local dependencies.
import { ModuleAttrs } from './types';


export const placeholderContent: ModuleAttrs = {
  name: {
    innerContent: {
      desktop: {
        value: 'placeholder.name',
      },
    }
  },
  job_title: {
    innerContent: {
      desktop: {
        value: 'placeholder.job_title',
      },
    }
  },
  profile: {
    innerContent: {
      desktop: {
        value: {
          url: 'placeholder.profile',
          target: 'on',
        }
      },
    }
  },
};
