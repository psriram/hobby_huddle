angular.module('firebase.config', [])
  .constant('FBURL', 'https://hobbyhuddle.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','github'])

  .constant('loginRedirectPath', '/login');
