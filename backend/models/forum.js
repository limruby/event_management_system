const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    booth_id: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
        required: true 
    },
    account_id: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],        
    },
    email: {
        type: String,        
    },
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    comment_date:{
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;