/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Shubhojit Dasgupta";
var awesomeThoughts = "I am " + name + " and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//Object for bio details
var bio = {
    "name": HTMLheaderName.replace("%data%", name),
    "role": HTMLheaderRole.replace("%data%", "Full Stack Web developer."),
    "contacts": {
        "mobile": HTMLmobile.replace("%data%", "9677365402"),
        "email": HTMLemail.replace("%data%", "shubhojit.dasgupta@gmail.com"),
        "github": HTMLgithub.replace("%data%","Brisinger"),
        "location": HTMLlocation.replace("%data%", "Hyderabad, India.")
    },
    "welcomeMessage": HTMLwelcomeMsg.replace("%data%", "Inqusitive web developer"),
    "biopic": HTMLbioPic.replace("%data%", "images/fry.jpg"),
    "skills": ["C# 4.0", "MVC 5.0", "ASP.Net 4.0", "CSS 3", "HTML 5", "JavaScript", "Bootstrap 3"]

};
console.log(awesomeThoughts);
console.log(funThoughts);


$("#header").append(bio.biopic);
$("#header").append(bio.welcomeMessage);
$("#header").append(HTMLskillsStart);

bio.skills.forEach(function (skill) {
    $("#skills").append(HTMLskills.replace("%data%", skill));
});

$("#topContacts").prepend(bio.contacts["location"]);
$("#topContacts").prepend(bio.contacts.github)
$("#topContacts").prepend(bio.contacts.email);
$("#topContacts").prepend(bio.contacts.mobile);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

//$("#topContacts").prepend(bio.Contact);
//$("#topContacts").prepend(bio.Mobile);
//$("#topContacts").prepend(bio.Mail);