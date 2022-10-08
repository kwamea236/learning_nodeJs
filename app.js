const express = require("express");
const res = require("express/lib/response");
const httpStatus = require("http-status-codes");

const app = express();

const port = process.env.PORT || 3000;

app.get((req, res)=>{
    res.type("text/plain");
    res.status(httpStatus.StatusCodes.NOT_FOUND);
    res.send("404 notfound")
})

app.use((err,req, res,next)=>{
    res.type("text/plain");
    res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
    res.send("404 notfound")
})

app.listen(port, ()=>{
    console.log(`Express start on http://localhost:${port}`+
    ` press ctrl-c to terminate`);
});