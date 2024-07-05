// Typing Animation
var typed = new Typed(".typing", {
    strings: ["", "Frontend Developer", "Web Developer", "Full Stack Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    loop: true,
})

// Responsive Navbar
const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    console.log(a);
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
    })
}

// Emailjs
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('mithubiswasinfo', 'template_oha5688', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message, please try again.');
        });
});
