let data = new Promise(function(resolve, reject) {
  var data = "";
  setTimeout(function() {
    if (data) {
      resolve("success");
    } else {
      reject("data not found");
    }
  }, 2000);
});

data
  .then((data) => {
    console.log(data); // Prints: success
  })
  .catch((error) => {
    console.log(error); // If data was falsy
  })
  .finally(() => {
    console.log("Finally: This always runs");
  });
