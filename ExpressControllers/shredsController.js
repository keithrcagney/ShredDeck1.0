const models = require('../MongooseModels/shredbookModel.js');
const { Shred } = models;
const shredsController = {};

shredsController.getShreds = (req, res, next) => {
  Shred.find({}, 'shreds', null, (err, shreds) => {
    if (err){
      return next({
        log: "Error getting shreds in shredsController.getShreds()",
        message: "Error getting shreds."
      });
    }
    res.locals.shreds = shreds;
    next();
  });
};

shredsController.addShred = (req, res, next) => {
  Shred.create(req.body, (err, shred) => {
    if (err){
      return next({
        log: "Error creating shred in shredsController.addShred()",
        message: "Error creating shred."
      });
    }
    res.locals.shreds.push = shred;
    next();
    });
};

shredsController.deleteShred = (req, res, next) => {
    const {id} = req.params;
    Shred.findOneAndDelete({ _id: {id} }, (err, deleted) => {
    res.locals.deleted = deleted;
    next();
  });
};

module.exports = shredsController;