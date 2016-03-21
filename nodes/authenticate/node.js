//output = [passport, 'authenticate', $.strategy.name, $.options]
output = function() {
  passport.authenticate(
    $.strategy.name,
    $.options, function(err, user, info) {
      cb({
        error: $.create(err),
        user: $.create(user),
        info: $.create(info),
        req: $.get('req'),
        res: $.get('res')
      });
    }
  )($.req, $.res);
};
