const messageModel = require("../model/messageModel");

module.exports.register = async (req, res, next) => {
  try {
    return res.json({
      "companyName" : "AffordMedical",
      "ownerName" : "Ashish",
      "rollNo" : "21131011660",
      "ownerEmail":"ashish.21scse1010071@gagotiasuniversity.edu.in",
      "accessCode" : "TMaXNS"
  });
  } catch (ex) {
    next(ex);
  }
};
module.exports.auth = async (req, res, next) => {
try{
  res.json({
    "companyName": "AffordMedical",
    "clientID": "e2c7be2e-65d3-4e9b-9c3a-0a0eb9d7257e",
    "clientSecret": "HejlcldDedWLzVMY",
    "ownerName": "Ashish",
    "ownerEmail": "ashish.21scse1010071@gagotiasuniversity.edu.in",
    "rollNo": "21131011660"
});
}
  catch (ex) {
    next(ex);
  }
};
