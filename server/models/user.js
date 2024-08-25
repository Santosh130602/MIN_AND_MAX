const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username:{type:String},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        accountType: {
            type: String,
            enum: ["Admin", "User", "Company"],
            required: true,
        },
        contactNumber: { type: String, required: true },
        image: { type: String, default: '' },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
