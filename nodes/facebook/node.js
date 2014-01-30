output = {
  strategy: new passportFacebook.Strategy({
    clientID: input.credentials.clientID,
    clientSecret: input.credentials.clientSecret,
    callbackURL: input.callbackURL
  })
};
