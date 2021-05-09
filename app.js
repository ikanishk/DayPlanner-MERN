const express = require('express')
const bp = require("body-parser");

const app = express()
const port = 3000
var items=["Eat","Sleep", "Code", "Repeat"];

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
var today= new Date();
var currentday= today.getDay();
var day="";




var options = { weekday: 'long', year: 'numeric', month: 'long' };
var today  = new Date();

var day=today.toLocaleDateString("en-US", options);

res.render("list",{
  kindofday:day, newItm:items
});

});

app.post("/",function(req,res){
  var item=req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at 3000`)
})
