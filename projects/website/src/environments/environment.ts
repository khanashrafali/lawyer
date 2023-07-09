// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBjneUuYt_XQHlKjbFHc-czlzDGBgwc2Xs',
    authDomain: 'manihar-eaaff.firebaseapp.com',
    projectId: 'manihar-eaaff',
    storageBucket: 'manihar-eaaff.appspot.com',
    messagingSenderId: '733543814717',
    appId: '1:733543814717:web:ef8d6add3ed791ca043c54',
    measurementId: 'G-QZ05E7TS3X',
  },
  production: false,
  // apiUrl: 'https://manihar.in/api/v1',
  apiUrl: 'http://localhost:3000/api/v1',
  // apiUrl: "http://192.168.1.34:3000/api/v1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
