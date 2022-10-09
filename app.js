/**
 * Author: Kwame Ato
 * Date: 9th October, 2022
 */

const expressHandlebars=require("express-handlebars");

const express = require("express");

const httpStatus = require("http-status-codes");

const app = express();

const port = process.env.PORT || 3000;


/**
 * express handlebars configuration
 * 
 * *********************************
 * 
 * handlebars is a page template engine
 * used to render static and dynamic html pages
 */

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: "main",
}));

app.set("view engine", "handlebars");

//end of handlebar engine configuration

/**
 * 
 * 
 */

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/about",(req, res)=>{
    res.render("about");
})


/**
 * custome eror handling
 */

app.use((req, res)=>{
    res.status(httpStatus.StatusCodes.NOT_FOUND);
    res.render("404");
});

//custome 500 internal server error

app.use((err,req, res,next)=>{
    console.error(err.message);
    res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
    res.render("500");
})

//listening port
app.listen(port, ()=>{
    console.log(`Express start on http://localhost:${port}\n`+
    `press ctrl-c to terminate`);
});