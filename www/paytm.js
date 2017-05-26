module.exports = {
  startPayment: function(orderId, customerId, email, phone, amount, successCallback, failureCallback) {
    console.log("Function call happening");
    cordova.exec(successCallback,
                 failureCallback, 
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount]);
  }
};
