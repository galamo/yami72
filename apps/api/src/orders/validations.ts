import Joi from "joi";
const orderSchema = Joi.object({
    date: Joi.date(),
    orderOwner: Joi.string(),
    numberOfSeats: Joi.number(),
    insideOrOutside: Joi.string().valid("inside", "outside")
})

function validateOrderPayload(req, res, next) {
    const { error } = orderSchema.validate(req.body)
    if (error) return next(new Error(error.message))
    next()
}



export { validateOrderPayload }