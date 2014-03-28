//output = [passport, 'authenticate', input.strategy.name, input.options]
output = function() {

  passport.authenticate(
    input.strategy.name,
    input.options, function(err, user, info) {
      cb({
        error: err,
        user: user,
        info: info,
        req: input.req,
        res: input.res
      });
    }
  )(input.req, input.res);

};
