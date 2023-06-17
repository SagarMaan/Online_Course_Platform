import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  status: {
    type: String,
    enum: ["Administrator", " User", "Visitor"],
    required: true,
    trim: true,
  },
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  totalTickets: {
    type: Number,
    required: true,
  },
  ticketAvability: {
    type: String,
    enum: ["Available", "Not Available"],
  },
  remainingTickets: {
    type: Number,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
});

const eventModel = model(Events, eventSchema);
export default eventModel;
