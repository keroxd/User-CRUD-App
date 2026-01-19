import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false,
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: 'Birth date cannot be in the future.'
        }
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://example.com/default-avatar.png"
    }
}, {
})



const User = mongoose.model('User', userSchema);
export default User;