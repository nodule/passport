output = {
  strategy: new passportGithub.Strategy.GithubStrategy( {
    clientID: input.credentials.clientID,
    clientSecret: input.credentials.clientSecret,
    callbackURL: input.callbackURL
  })
};
