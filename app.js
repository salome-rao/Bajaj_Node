const express = require('express');

const app = express();


const bfhlroute = require('./routers/bfhl');

app.use("/bfhl",bfhlroute);


// Start the Express server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
