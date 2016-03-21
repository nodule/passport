//output = [passport, 'authenticate', $.strategy.name, $.options]
output = function() {

  passport.authenticate(
    $.strategy.name,
    $.options, function(err, user, info) {
      cb({
        error: err,
        user: user,
        info: info,
        req: $.req,
        res: $.res
      });
    }
  )($.req, $.res);

};
