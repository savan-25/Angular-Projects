// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: String,
//     password: String,
// });

// module.exports = mongoose.model('user', userSchema, 'users');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile: { type: String, required: true },
        password: { type: String, required: true }
    }
)

module.exports = mongoose.model('Memberdata',userSchema); 