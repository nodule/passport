output = {
  strategy: $.create(new passportFacebook.Strategy({
    clientID: $.credentials.clientID,
    clientSecret: $.credentials.clientSecret,
    callbackURL: $.callbackURL
  }))
};
