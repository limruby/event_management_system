const Forum = require('../models/forum');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const create = (req, res, next) => {
    const booth_id = JSON.parse(req.body.booth_id);
    const account_id = JSON.parse(req.body.account_id);
    const email = req.body.email;
    const name = req.body.name;
    const role = req.body.role;
    const comment = req.body.comment;
    const comment_date = req.body.comment_date;

    const newForum = new Forum({
        booth_id,
        account_id,
        email,
        name, 
        role, 
        comment,
        comment_date
    })
    newForum.save()
  .then(() => res.json(newForum))
  .catch(err => res.status(400).json('Error: ' + err));
    
}

const read = (req, res, next)=>{
    var booth_id = JSON.parse(req.query.booth_id);
    Forum.find({booth_id: ObjectId(booth_id)}, (err, forums) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
      if (!forums) {
        return res
        .status(404)
        .json({ success: false, error: req.query.booth_id })
      }
      return res.status(200).json({ success: true, data: forums })
    }).catch(err => console.log(err))
};

module.exports = {create, read}