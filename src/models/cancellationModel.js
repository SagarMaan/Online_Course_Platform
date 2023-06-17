import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId
const { Schema , model } = mongoose

const cancellationSchema = new Schema (
    {
        ticketId : {
            type : ObjectId ,
            ref : "Tickets" ,
            required : true ,
            trim : true
        } ,
        userId : {
            type : ObjectId ,
            ref : "Users" ,
            requireed : true ,
            trim : true
        } ,
        cancellationDate : {
            type : Date ,
            required : true
        } ,
        cancellationStatus : {
            type : String ,
            enum : [ "Pending" , "Cancelled" ]
        }
    }
)

const cancellationModel = model ( Ticket_Cancellation , cancellationSchema )
export default cancellationModel