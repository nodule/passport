output = {
  strategy: $.create(new passportTwitter.Strategy({
    consumerKey: $.credentials.consumerKey,
    consumerSecret: $.credentials.consumerSecret,
    callbackURL: $.callbackURL
  }))
};
