const mongoose = require ('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type : String, 
        required :[true , 'Please add a text value']
    },
    Phone_number: {
        type : Number , 
        required: true,
    }
    
}, 
{
    timestamps  :true,
}
)

module.exports = mongoose.model('Goal', goalSchema)