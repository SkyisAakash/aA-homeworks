console.log("Hello from the JavaScript console!");
// It should be a GET request.
// It should get the New York weather from this url: http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b
// If the request fails, sign up for your own API key here and stick that key in place of bcb83c4b54aee8418983c2aff3073b3b.
// It should take a success callback
// In the success callback, console.log out what the weather is.
// Your AJAX request here
  $.ajax({
    type: 'GET',
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    success(data) {
      console.log(data);
    },
    error() {
      console.error("oops");
    },
  });

  console.log("I dont know why its here")
// Add another console log here, outside your AJAX request
