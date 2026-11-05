import express from 'express';
import session from 'express-session';
const app=express();

//middleware to enable sessions
app.use(session({
    secret:'secret_key',
    resave:false,
    saveUninitialized:true,
}));

//routes to set the session
app.get('/setSession',(req,res)=>{
req.session.username="Geeks for Geeks";
res.send("Session set successfully");
});

//Route to retrieve the session
app.get('/getSession',(req,res)=>{
//retrieving session data
const username=req.session.username;
res.send(`Usename from session:${username}`);
});


//Route to destroy the session
app.get('/destroySession',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.error(err);
        }else{
            res.send('Session destroyed successfully');
        }
    });
});


app.listen(3000,()=>{
    console.log('Server is running on Port 3000');
});