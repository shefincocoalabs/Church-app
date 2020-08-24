const mongoose = require('mongoose');

function transform(ret) {
    ret.id = ret._id;
    ret.category = ret.categoryId;
    delete ret.categoryId;
    delete ret._id;
    delete ret.status;
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

const EventCategorySchema = mongoose.Schema({
    name: String,
    status: Number,
    tsCreatedAt: Number,
    tsModifiedAt: Number

}, options);
module.exports = mongoose.model('EventCategory', EventCategorySchema, 'EventCategories');