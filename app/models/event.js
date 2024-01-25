const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    societyName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    unstop: {
        type: String,
    },
    teamSizeMIN: {
        type: Number,
        default: 1 
    },
    teamSizeMax: {
        type: Number,
        default: 1 
    },
    prize: {
        type: Number,
        default: 0
    },
    venue: {
        type: String
    },
    registrationEndDate: {
        type: Date,
        required: true
    },
    location:{
        type: String,
    },
    image: {
        type: String,
    },
    readmore:{
        type: String,
    }
}, { timestamps: true });

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
