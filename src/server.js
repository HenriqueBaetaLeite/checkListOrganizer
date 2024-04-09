const app = require("./app");

const PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
