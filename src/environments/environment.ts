// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB2-KLafzEcu-5bvKOsP9FIL-akGZbcBq0",
    authDomain: "ionic-98888.firebaseapp.com",
    projectId: "ionic-98888",
    storageBucket: "ionic-98888.appspot.com",
    messagingSenderId: "1069556518018",
    appId: "1:1069556518018:web:ab4d8b81fc62cb913f389b",
    measurementId: "G-RCMW7F5GVC",
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
