const mongoose = require('mongoose');

function transform(ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.status;
    delete ret.tsCreatedAt;
    delete ret.tsModifiedAt;
}
var options = {
    toObject: {
        virtuals: true,
        transform: function (doc, ret) {
            transform(ret);
        }
    },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            transform(ret);
        }
    }
};

const ParishWardSchema = mongoose.Schema({
    name: String,
    churchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Church'},
    parishId: { type: mongoose.Schema.Types.ObjectId, ref: 'Parish'},
    status: Number,
    tsCreatedAt: Number,
    tsModifiedAt: Number

}, options);
module.exports = mongoose.model('ParishWard', ParishWardSchema, 'ParishWards');