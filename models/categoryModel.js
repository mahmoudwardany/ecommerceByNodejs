import {Schema,model} from'mongoose'

const categorySchema=new Schema({
name:{
    type:String,
    required:[true,'name is required'],
    minLength:[3,'too short name'],
    maxLength:[20,'too long userName'],
    unique:true
},
slug:String,
image:{
    type:String,
},
imagePublicId:String,
createdBy:{
    type:Schema.Types.ObjectId,
    required:[true,'createdBy is required'],
    ref:"User"
},

},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
})
categorySchema.virtual('subCategory',{
    localField:"_id",
    foreignField:"categoryId",
    ref:"Subcategory",
})


const categoryModel=model('Category',categorySchema)
export default categoryModel
