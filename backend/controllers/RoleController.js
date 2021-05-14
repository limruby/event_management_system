const Role = require('../models/role');




const readRole = (req, res, next)=>{

    Role.find({}, (err, roles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!roles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Roles not found` })
        }
        return res.status(200).json({ success: true, data: roles })
    }).catch(err => console.log(err))
 };



module.exports = {readRole}