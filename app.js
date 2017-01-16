var express = require("express");
var app=express();

var bodyParser=require("body-parser");
var data=[
        {partname:"short cylinder",img:"http://www.needforseatusa.com/assets/images/products/replacement%20parts/short_cylinder_thumbnail.jpg",price:"14.90"},
        {partname:"regular cylinder",img:"http://www.needforseatusa.com/assets/images/products/replacement%20parts/cylinder_thumbnail.jpg",price:"14.90"},
        {partname:"back pillow",img:"http://www.needforseatusa.com/assets/images/products/replacement%20parts/lumbar_pillow_thumbnail.jpg",price:"29.90"},
        {partname:"head pillow",img:"http://www.needforseatusa.com/assets/images/products/replacement%20parts/head_pillow_thumbnail.jpg",price:"29.90"},
        {partname:"wheel base black",img:"http://www.needforseatusa.com/assets/images/products/accessories/hd-base-black_thumbnail.jpg",price:"79.99"},
        {partname:"wheel base chrome",img:"http://www.needforseatusa.com/assets/images/products/accessories/hd_base_)1_thumbnail.jpg",price:"79.99"}
        ];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render('landing');
});


app.get("/campground",function(req,res){
    
    
    
   res.render("campground", {data:data}); 
});


app.post("/campground",function(req,res){
   //get data from form and add to camp grounds array
   //redirect back to campgroundspage
   
   var partname=req.body.partname;
   var img=req.body.img;
   var newobject={
       partname:partname,
       img:img
   }
   
   data.push(newobject);
   res.redirect("/campground");
   
   
});

app.get("/campground/new",function(req,res){
    res.render("new.ejs");
}); 

app.listen(process.env.PORT||3000,function (){
   console.log("the yelp camp server has start"); 
});