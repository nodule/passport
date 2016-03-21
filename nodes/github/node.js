output = {
  strategy: new passportGithub.Strategy({
    clientID: $.credentials.clientID,
    clientSecret: $.credentials.clientSecret,
    callbackURL: $.callbackURL
  })
};
