import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Middleware to parse cookies from the request
app.use(cookieParser());

//Route to set the cookie
app.get('/setCookie',(req,res)=>{
//setting a cookie
res.cookie("username","GeeksforGeeks");
res.send("Cookie set succesfully");
});

//Route to retrieve the cookie
app.get('/getCookie',(req,res)=>{
const username=req.cookies.username;
res.send(`Username:${username}`);
});

//Route to delete cookie
app.get('/clearCookie',(req,res)=>{
res.clearCookie("username");
res.send("Cookie deleted successfully");
});


// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});