// Require function that already logs in and asks for the credentials if needed
const promptiCloud = require("../prompt-credentials");

(async () => {
  // Login to icloud and ask for new credentials if needed
  const myCloud = await promptiCloud();

  const collectionsWithCompletedTasks = await myCloud.Reminders.getCompletedTasks();

  console.log(collectionsWithCompletedTasks);

})();
