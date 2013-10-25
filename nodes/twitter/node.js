output = {
  strategy: new passportTwitter.Strategy( {
    consumerKey: input.credentials.consumerKey,
    consumerSecret: input.credentials.consumerSecret,
    callbackURL: input.callbackURL
  })
};
