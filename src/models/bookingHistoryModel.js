import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId
const { Schema , model } = mongoose

const bookingHistorySchema = new Schema (
    {
        userId : {
            type : ObjectId ,
            ref : "Users",
            required : true ,
            trim : true
        } ,
        eventId : {
            type : ObjectId ,
            ref : "Events" ,
            required : true ,
            trim : true
        } , 
        ticketId : {
            type : ObjectId ,
            ref : "Tickets" ,
            required : true ,
            trim : true
        }
    }
)

const bookingHistoryModel = model( Booking_History , bookingHistorySchema )
export default bookingHistoryModel