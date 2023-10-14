const { Schema, model } = require("mongoose")
const couponSchema = new Schema({
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    discount: { type:Number, required: true },
    discountType: { type: String, enum: ['Percentage', 'Fixed Amount'], required: true },
    countries: { type: [String], required: true },
    expirationDate: { type: Date, required: true },
    usageLimit: { type: Number, required: true },
    usedCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }

}, { timestamps: true })
const Coupon = model("Coupon", couponSchema)
model.exports = Coupon