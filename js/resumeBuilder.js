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
        "github": HTMLgithub.replace("%data%", "Brisinger"),
        "location": HTMLlocation.replace("%data%", "Hyderabad, India.")
    },
    "welcomeMessage": HTMLwelcomeMsg.replace("%data%", "Inqusitive web developer"),
    "biopic": HTMLbioPic.replace("%data%", "images/fry.jpg"),
    "skills": ["C# 4.0", "MVC 5.0 with Bootstrap 3 ", "ASP.Net 4.0", "SharePoint", "CSS 3", "HTML 5", "JavaScript"]

};
//Object for educational details
var education = {
    "schools": {
        "name": "Amrita school of engineering",
        "location": "Ettimadai, Coimbatore",
        "degree": "B-Tech",
        "major": "Computer Science and Engineering",
        "dates": "2008-2012",
        "url": "https://www.amrita.edu/school/engineering"
    },
    "onlineCourses": [{
        "title": "HTML5 & CSS3",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cmooc.cognizant.com/course/view.php?id=14"
    }, {
        "title": "JavaScript",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://cmooc.cognizant.com/course/view.php?id=35"
    }]
};
//Object for work details.
var work = {
    "jobs": [{
        "employer": "Cognizant technology solutions",
        "title": "Associate",
        "location": "Chennai, India",
        "dates": "2012 - Future",
        "description": "Professional experience in the field of Information Technology with complete focus on Web development and enhancement",
        "url": "https://www.cognizant.com/"
    }]
};
//Object for projects details.
var projects = {
    "projects": [{
        "title": "Healthcare Talent Management Portal",
        "dates": "Jan 2014 - Dec 2014",
        "description": "Cerebrum Portal is a Sharepoint site that's used for sharing and displaying information," +
                       " documents and queries with authorized access to Healthcare associates only.",
        "images": ["images/cerebrum.gif", "images/cerebrum1.gif"],
        "url": "https://cerebrum.cognizant.com/Pages/index.aspx"
    },
    {
        "title": "Healthcare Mobility",
        "dates": "2015 - 2016",
        "description": "ASP.Net web application for automatically transferring data, based on the data in uploaded excel sheets.",
        "images": ["images/Healthcare Mobility.gif"],
        "url": "https://hctravelexpense.cognizant.com/"
    }]
};

console.log(awesomeThoughts);
console.log(funThoughts);


$("#header").append(bio.biopic);
$("#header").append(bio.welcomeMessage);
//Adding skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function (skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
    });
}
$("#topContacts").prepend(bio.contacts["location"]);
$("#topContacts").prepend(bio.contacts.github)
$("#topContacts").prepend(bio.contacts.email);
$("#topContacts").prepend(bio.contacts.mobile);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

function displayWork() {
    //Adding work details to the HTML template.
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace(/#|%data%/gi, function (mapped) {
            return mapped === '#' ? job.url : job.employer + HTMLworkTitle.replace("%data%", job.title);
        }), HTMLworkDates.replace("%data%", job.dates), HTMLworkLocation.replace("%data%", job.location),
        HTMLworkDescription.replace("%data%", job.description));
    });
}
displayWork();
//Adding education details to HTML template.
var mapObj = {};
mapObj["#"] = education.schools["url"];
mapObj["%data%"] = education.schools["name"] + HTMLschoolDegree.replace("%data%", education.schools.degree);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace(/#|%data%/gi, function (mapped) {
    return mapObj[mapped];
}), HTMLschoolDates.replace("%data%", education.schools.dates), HTMLschoolLocation.replace("%data%", education.schools.location),
HTMLschoolMajor.replace("%data%", education.schools.major), HTMLonlineClasses,
HTMLonlineTitle.replace(/#|%data%/gi, function (mapped) {
    mapObj["#"] = education.onlineCourses[0].url;
    mapObj["%data%"] = education.onlineCourses[0].title + HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    return mapObj[mapped];
}), HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates), HTMLonlineURL.replace(/#|%data%/gi, function (mapped) {
    mapObj["#"] = mapObj["%data%"] = "https://classroom.udacity.com/courses/ud304";
    return mapObj[mapped];
}), HTMLonlineTitle.replace(/#|%data%/gi, function (mapped) {
    mapObj["#"] = education.onlineCourses[1].url;
    mapObj["%data%"] = education.onlineCourses[1].title + HTMLonlineSchool.replace("%data%", education.onlineCourses[1].school);
    return mapObj[mapped];
}), HTMLonlineDates.replace("%data%", education.onlineCourses[1].dates), HTMLonlineURL.replace(/#|%data%/gi, function (mapped) {
    mapObj["#"] = mapObj["%data%"] = "https://classroom.udacity.com/courses/ud804";
    return mapObj[mapped];
}));
//Adding projects details to HTML template.
$("#projects").append(HTMLprojectStart);
projects.projects.forEach(function (project, index) {
    $(".project-entry").append(HTMLprojectTitle.replace(/#|%data%/gi, function (mapped) {
        mapObj["#"] = projects.projects[index].url;
        mapObj["%data%"] = projects.projects[index].title;
        return mapObj[mapped];
    })
    , HTMLprojectDates.replace("%data%", projects.projects[index].dates),
    HTMLprojectDescription.replace("%data%", projects.projects[index].description));
    projects.projects[index].images.forEach(function (image) {
        $(".project-entry").append(HTMLprojectImage.replace("%data%", image));
    });
});
