import administratorModel from "../models/administratorModel.js";
import eventModel from "../models/eventModel.js";
import {
  validInputs,
  validEmailId,
  validPassword,
  validGender,
  validName,
} from "../utils/validation/functionValidations/functionval.js";




export let adminstrationRegister = async function (req, res) {
  try {
    let data = req.data;
    data = validInputs(data);
    let { administratorName, emailId, password, gender } = data;

    data.administratorName = validName(administratorName);
    emailId = validEmailId(emailId);

    let checkEmail = await administratorModel.findOne({ emailId: emailId });

    if (checkEmail) {
      return res.status(400).send({
        status: false,
        message: "Provide a unique emailid this id already in use.",
      });
    }
    data.emailId = emailId;
    data.password = validPassword(password);
    data.gender = validGender(gender);

    let createAdminstrator = await administratorModel.create(data);

    return res
      .status(201)
      .send({
        staus: ture,
        message: "Administrator created successfuly.",
        data: createAdminstrator,
      });
  } catch (error) {
    return res.status(500).send({ status: flase, message: error.message });
  }
};

