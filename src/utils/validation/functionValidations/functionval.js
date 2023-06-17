import {
    validateUserName,
    validateEmailId,
    validatePassword,
    validateGender,
    validateBookingStatus,
    validateCancellationStatus,
  } from '../regexValidations/validatior.js'

  import administratorModel from '../../../models/administratorModel.js';
  import userModel from '../../../models/userModel.js';
  import eventModel from '../../../models/eventModel.js';
  import ticketModel from '../../../models/ticketModel.js';



  //  ------------->>>>>>>>>>> Check that the input object have some cridental or not   <<<<<<<<<------------//   


export const validInputs = (data) => {
    if (Object.keys(data).length === 0)
    return res
      .status(400)
      .send({ status: false, message: "Body can't be empty" });
      return data
}


//  -------------->>>>>>>>>>>   Check that the given User ID is valid or not    <<<<<<<<<<<--------------//  


export const validUserId = async (userId) => {
    
    if (!isValidObjectId(userId))
      return res
        .status(400)
        .send({ status: false, message: "User Id is invalid." });

    let getUserId = await userModel.findOne({ _id: userId });

    if (!getUserId)
      return res
        .status(404)
        .send({ status: false, message: "User not found." });

        return userId
}


//  --------->>>>>>>>>>>   Check that the given Administrator ID is valid or not    <<<<<<<<<<<-----------//  


export const validAdministratorId = async (administratorId) => {
    
  if (!isValidObjectId(administratorId))
    return res
      .status(400)
      .send({ status: false, message: "Administrator Id is invalid." });

  let getAdministratorId = await administratorModel.findOne({ _id: administratorId });

  if (!getAdministratorId)
    return res
      .status(404)
      .send({ status: false, message: "Administrator not found." });

      return administratorId
}


//  --------->>>>>>>>>>>   Check that the given Event ID is valid or not    <<<<<<<<<<<-----------//  


export const validEventId = async (eventId) => {
    
  if (!isValidObjectId(eventId))
    return res
      .status(400)
      .send({ status: false, message: "Event Id is invalid." });

  let getEventId = await eventModel.findOne({ _id: eventId });

  if (!getEventId)
    return res
      .status(404)
      .send({ status: false, message: "Event not found." });

      return eventId
}


//  --------->>>>>>>>>>>   Check that the given Ticket ID is valid or not    <<<<<<<<<<<-----------//  


export const validTicketId = async (ticketId) => {
    
  if (!isValidObjectId(ticketId))
    return res
      .status(400)
      .send({ status: false, message: "Ticket Id is invalid." });

  let getTicketId = await ticketModel.findOne({ _id: ticketId });

  if (!getTicketId)
    return res
      .status(404)
      .send({ status: false, message: "Ticket not found." });

      return ticketId
}


//  ------------->>>>>>>>>>>   Check that the user name is in correct way or not     <<<<<<<<<------------//  


export const validName = (userName) => {
  if (!userName || typeof userName != "string")
  return res.status(400).send({
    status: false,
    message:
      "Please provide user name with suitable datatype OR it can't be empty",
  });

if (!validateUserName(userName)) {
  return res.status(400).send({
    status: false,
    message: "User name should contain only alphabates.",
  });
}
return userName
}



//  ------------->>>>>>>>>>>   Check that the Email-Id is in correct way or not     <<<<<<<<<------------//  


export const validEmailId = async (emailId) => {

  if (!emailId || typeof emailId != "string")
      return res.status(400).send({
        status: false,
        messsage: "Email is mandatory with suitable datatype",
      });

    if (!validateEmailId(emailId)) {
      return res.status(400).send({
        status: false,
        message: "EmailId should be in a valid format.",
      });
    }
    return emailId
}


//  ------------->>>>>>>>>>>   Check that the Password is in correct way or not     <<<<<<<<<------------//  

export const validPassword = async (password) => {
  
  if (!password || typeof password != "string")
  return res.status(400).send({
    status: false,
    messsage: "Paasword is mandatory with suitable datatype",
  });

if (!validatePassword(password)) {
  return res.status(400).send({
    status: false,
    message: "Password should be in a valid format.",
  });
}

let hashing = bcrypt.hashSync(password, 8);
data.password = hashing;
return data

}


//  ------------->>>>>>>>>>>   Check that the Gender is in correct way or not     <<<<<<<<<------------//  


export const validGender = async (gender) => {
  if (typeof gender != "string") {
    return res
      .status(400)
      .send({ status: false, message: "Gender must be in string" });
  }

  if (!validateGender(gender)) {
    return res.status(400).send({
      status: false,
      message: "Gender status should be Male , Female or Other .",
    });
  }
  return gender
}

