// express js (framework of nodejs) for REST API
var express = require("express");
var app = express();

const os = require("os");

app.get("/getTime",(req, res, next) => {
    let date = new Date();
	let hour = ("0" + date.getHours()).slice(-2);
	let min = ("0" + date.getMinutes()).slice(-2);
	let sec = ("0" + date.getSeconds()).slice(-2);

    res.send(`Time is  ${hour}:${min}:${sec}`);
})

app.get("/getUpTime", (req, res, next) => {
	let upTimeSec = os.uptime();
    let upTimeMin = upTimeSec/60;
    let upTimeHour = upTimeMin / 60;

    upTimeHour %= 60;
    upTimeMin %= 60;
    upTimeSec %= 60;

    res.send(`Up time of server is  ${upTimeHour.toFixed(0)} hr : ${upTimeMin.toFixed(0)} min : ${upTimeSec.toFixed(0)} sec`);
});

app.listen(3000, () => {
	console.log("Listening on port 3000 on localhost");
});
