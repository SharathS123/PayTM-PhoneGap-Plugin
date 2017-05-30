module.exports = {
  startPayment: function(orderId, customerId, email, phone, amount,checksum, successCallback, failureCallback) {
    cordova.exec(successCallback,
                 failureCallback,
                 "PayTM",
                 "startPayment",
                 [orderId, customerId, email, phone, amount,checksum]);
  }
};

