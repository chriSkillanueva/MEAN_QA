console.log('Hit: Answer Model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({

    name : {
        type:String,
    },

    answer : {
        type: String,
        required: [true, "Answer is required"],
        minlength: [5, "Answer must be at least 5 characters"]
    },

    details : {
        type: String,
    },

    likes: {
        type:Number, default:0
    },

    _question: [{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }]
},
{timestamps:true})


mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');

// Use native promises
mongoose.Promise = global.Promise;
