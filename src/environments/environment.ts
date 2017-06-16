// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCf_nYXKLdqlk1iu87c-Y97EpnepDAdXGY',
    authDomain: 'lamd-photo-bucket.firebaseapp.com',
    databaseURL: 'https://lamd-photo-bucket.firebaseio.com',
    projectId: 'lamd-photo-bucket',
    storageBucket: '',
    messagingSenderId: '961268170454'
  }
};
