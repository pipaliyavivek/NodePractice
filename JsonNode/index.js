const EventEmmiter = require('events');

const events = new EventEmmiter();

events.on("Xyz",()=> 
{
    console.log("Ebent Called");
});
events.on("Xyz",()=> // call events listern
{
    console.log("vevewvev");
});

events.emit("Xyz");// event call emit create

// const d = {
//     name: "vivek",
//     age:22,
//     dob:13062001,
// };
//  var myjson = JSON.stringify(d);
//  console.log(myjson);
