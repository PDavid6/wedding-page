let mainpage = document.getElementById('mainpage');
let locations =  document.getElementById('locations');
let programs = document.getElementById('progs');
let gifts = document.getElementById('present');
let faq = document.getElementById('faq');
let contacts = document.getElementById('contact');


function scrollToMain () {
mainpage.scrollIntoView({behavior: "smooth", block: "center"});
}
function scrollToLocation () {
    locations.scrollIntoView ({behavior: "smooth", block: "center"});
}
function scrollToPrograms () {
    programs.scrollIntoView ({behavior: "smooth", block: "center"});
}
function scrollToGifts () {
    gifts.scrollIntoView ({behavior: "smooth", block: "center"});
}
function scrollToFaq () {
    faq.scrollIntoView({behavior: "smooth", block: "center"});
}                   
function scrollToContacts () {
    contacts.scrollIntoView(true);
}

document.getElementById('mainb').addEventListener('click', scrollToMain );
document.getElementById('locb').addEventListener('click', scrollToLocation );
document.getElementById('progb').addEventListener('click', scrollToPrograms );
document.getElementById('giftb').addEventListener('click', scrollToGifts );
document.getElementById('faqb').addEventListener('click', scrollToFaq );
document.getElementById('contb').addEventListener('click', scrollToContacts );

