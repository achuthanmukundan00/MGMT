// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as algoliasearch from 'algoliasearch/lite';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD7FJyl9s5fn7wEwK5cUX37loJoo4TdNfM',
    authDomain: 'mgmt-15d2d.firebaseapp.com',
    databaseURL: 'https://mgmt-15d2d.firebaseio.com',
    projectId: 'mgmt-15d2d',
    storageBucket: 'mgmt-15d2d.appspot.com',
    messagingSenderId: '639448961605'
  },

  algolia: {
    indexName: 'mgmt_user_search',
    searchClient: algoliasearch('HM7M00H9AC', '23396b2962b71d5343e3621f0413906f'),
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
