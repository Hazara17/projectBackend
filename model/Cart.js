const mongoose=require('mongoose');

const cartSchema=new mangoose.Schema({
    products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        }
    ],
    total:{
        type:Number
        }
    }
)

const Cart=mongoose.model('Cart,cartSchema');
module.exports={Cart}