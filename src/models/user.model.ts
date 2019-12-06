import { Schema, model } from 'mongoose';

const UserModel = new Schema({
    name: {
        type: Schema.Types.String
    },
    age: {
        type: Schema.Types.Number
    },
    email: {
        type: Schema.Types.String,
        unique: true
    }
}, {
    timestamps: true
});

export default model('User', UserModel);