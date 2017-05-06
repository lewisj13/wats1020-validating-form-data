/* Custom JS goes here. */


  $(document).on('ready', function(){

//Validation  and Requirements
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
   return arg != value;
  }, "Please select option from dropdown.");

  $('#order-form').validate({
    submitHandler: function(form) {
      form.submit();
    },

//Rules for Your Information
    rules: {
      "your-name": {
        required: true,
        maxlength: 128,
        digits: false
      },
      "your-state": {
        required: true,
        maxlength: 2,
        minlength: 2
      },
       "your-zip": {
        required: true,
        minlength: 5,
        digits: true
      },

  //Rules for Credit Card
       "card-holder-name": {
         required: true,
         maxlength: 128,
         digits: false
       },
       "card-number": {
         required: true,
         creditcard: true,
       },
       "expiry-month":{
         required: true,
         valueNotEquals: "Month",
       },
       "expiry-year": {
         required: true,
         valueNotEquals: "Year",
       },
       "cvv":{
         required: true,
         digits: true,
         maxlength: 3,
         minlength: 3
       },

  //Rules for Additional Sections
       "shipping-method": {
         required: true,
         valueNotEquals: "Select One",
       },
       "comments": {
         maxlength: 500,
       },
     },
 });
});
