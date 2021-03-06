// Require function that already logs in and asks for the credentials if needed
const promptiCloud = require("../prompt-credentials");

(async () => {
  // Login to icloud and ask for new credentials if needed
  const myCloud = await promptiCloud();

  myCloud.initPush();

  myCloud.on("push", function(notification) {
    console.log("New push notification!");
    console.log(notification);

    // demonstrate deactivating push after one notification
    myCloud.deactivatePush();
  });

})();
