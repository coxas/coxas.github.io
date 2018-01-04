var index_sec = document.getElementById("index_sec");
var portfolio_sec = document.getElementById("portfolio_sec");
var resume_sec = document.getElementById("resume_sec");
var contact_sec = document.getElementById("contact_sec");

var home = document.getElementById("home");
var portfolio = document.getElementById("portfolio");
var resume = document.getElementById("resume");
var contact = document.getElementById("contact");

function toggleHome() {
    index_sec.className = "display";
    portfolio_sec.className = "hidden";
    resume_sec.className = "hidden";
    contact_sec.className = "hidden";

    home.className = "navb underline";
    portfolio.className = "navb";
    resume.className = "navb";
    contact.className = "navb";
}

function togglePortfolio() {
    index_sec.className = "hidden";
    portfolio_sec.className = "display";
    resume_sec.className = "hidden";
    contact_sec.className = "hidden";

    home.className = "navb";
    portfolio.className = "navb underline";
    resume.className = "navb";
    contact.className = "navb";
}

function toggleResume() {
    index_sec.className = "hidden";
    portfolio_sec.className = "hidden";
    resume_sec.className = "display";
    contact_sec.className = "hidden";

    home.className = "navb";
    portfolio.className = "navb";
    resume.className = "navb underline";
    contact.className = "navb";
}

function toggleContact() {
    index_sec.className = "hidden";
    portfolio_sec.className = "hidden";
    resume_sec.className = "hidden";
    contact_sec.className = "display";

    home.className = "navb";
    portfolio.className = "navb";
    resume.className = "navb";
    contact.className = "navb underline";
}