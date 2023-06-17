//======================================= Name Regex Validation ========================================//
export const validateUserName = (userName) => {
    userName = userName.trim();
    return /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(userName);
  };
  
  //====================================== Email Regex Validation =======================================//
  export  const validateEmailId = (emailId) => {
    emailId = emailId.trim();
    return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(
      emailId
    );
  };
  
  //===================================== Password Regex Validation ====================================//
  export  const validatePassword = (password) => {
    password = password.trim();
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(
      password
    );
  };
  
  // ===================================== Status validation ====================================== //
  
  export  const validateGender = (gender) => {
    gender = gender.trim();
    return ["Male", "Female", "Others"].indexOf(gender) !== -1;
  };
  
  // ===================================== Status validation ====================================== //
  
  export  const validateBookingStatus = (bookingStatus) => {
    bookingStatus = bookingStatus.trim();
    return ["Pending", "Confirmed", "Cancelled"].indexOf(bookingStatus) !== -1;
  };
  // ===================================== Status validation ====================================== //
  
  export const validateCancellationStatus = (cancellationStatus) => {
    cancellationStatus = cancellationStatus.trim();
    return [ "Pending" , "Cancelled" ].indexOf(cancellationStatus) !== -1;
  };
  