var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/ruby-script", async function (req, res, next) {
  console.log(req.query.folder);

  await fetch(
    `https://y3p6vynofe.execute-api.ap-south-1.amazonaws.com/default?folder=${req.query.folder}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      },
    }
  )
    .then((response) => {
      res.send(`https://store-csv-bu.s3.ap-south-1.amazonaws.com/new-file.csv`);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
