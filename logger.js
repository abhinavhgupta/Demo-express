exports.log = (req, res, next) => {
    console.log('Method: ' + req.method + ', path: ' + req.path);
    next();
};