const {Schema, model} = require('mongoose');

const UserSchema = new Schema({

name: String,
lastName: String,
username: {
    type: String,
    require: true,
    unique: true
},
password: {
    type: String,
    require: true
},
phone: {
    type: Number,
    require: true
},

email: {
    type: String,
    require: true
},
role: {
    type: String,
    require: true,
    default: 'Cliente'         //Admin, store admin, editor, publisher, cliente
}
},
{   
    timestamps: true
}
);
const UserModel = model('User', UserSchema);

module.exports = UserModel;
