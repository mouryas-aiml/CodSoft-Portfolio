function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
});