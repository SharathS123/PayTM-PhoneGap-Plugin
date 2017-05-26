module.exports = {
  startPayment: function(orderId, customerId, email, phone, amount, successCallback, failureCallback) {
    console.log("Function call happening");
    console.log("OrderId" + orderId);
    console.log("customerId" + customerId);
    cordova.exec(successCallback,
                 failureCallback,
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount]);
  }
};

