/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


//
  $(document).on('ready', function(){

//Validation  and Requirements
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
   return arg != value;
  }, "Please select option from dropdown.");

  $('#order-form').validate({
    submitHandler: function(form) {
      form.submit();
    },
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
