import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: "Users",
    required: true,
    trim: true,
  },
  eventId: {
    type: ObjectId,
    ref: "Events",
    required: true,
    trim: true,
  },
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  NoOfTickets: {
    type: Number,
    min: 1,
    max: 10,
    default: 1,
  },
  remainingTickets: {
    type: Number,
  },
  bookingStatus: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
  },
});

const ticketModel = model("Tickets", ticketSchema);
export default ticketModel;
