output = {
  strategy: new passportGithub.Strategy({
    clientID: input.credentials.clientID,
    clientSecret: input.credentials.clientSecret,
    callbackURL: input.callbackURL
  })
};
