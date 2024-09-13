// Get references to the form and display areas
var form = document.getElementById('resumeForm');
var resumeContent = document.getElementById('resumeContent');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLinkElement = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the page from reloading on form submission
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experienceTitle = document.getElementById('experienceTitle').value;
    var experienceCompany = document.getElementById('experienceCompany').value;
    var experienceDates = document.getElementById('experienceDates').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        experienceTitle: experienceTitle,
        experienceCompany: experienceCompany,
        experienceDates: experienceDates,
        degree: degree,
        institution: institution,
        graduationYear: graduationYear,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Save data locally
    // Generate resume content dynamically
    var resumeHTML = "\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Experience</h3>\n        <p><b>Job Title:</b> <span contenteditable=\"true\">").concat(experienceTitle, "</span></p>\n        <p><b>Company:</b> <span contenteditable=\"true\">").concat(experienceCompany, "</span></p>\n        <p><b>Dates:</b> <span contenteditable=\"true\">").concat(experienceDates, "</span></p>\n        <h3>Education</h3>\n        <p><b>Degree:</b> <span contenteditable=\"true\">").concat(degree, "</span></p>\n        <p><b>Institution:</b> <span contenteditable=\"true\">").concat(institution, "</span></p>\n        <p><b>Graduation Year:</b> <span contenteditable=\"true\">").concat(graduationYear, "</span></p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume in the preview section
    resumeContent.innerHTML = resumeHTML;
    // Generate a shareable URL with the username
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    var jsPDF = window.jsPDF; // Make sure jsPDF is available globally
    var doc = new jsPDF();
    // Get the content from the resume preview section
    var resumeHTML = resumeContent.innerText;
    doc.text(resumeHTML, 10, 10);
    // Save the content as a PDF file
    doc.save('resume.pdf');
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Fetch and autofill the form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('experienceTitle').value = resumeData.experienceTitle;
            document.getElementById('experienceCompany').value = resumeData.experienceCompany;
            document.getElementById('experienceDates').value = resumeData.experienceDates;
            document.getElementById('degree').value = resumeData.degree;
            document.getElementById('institution').value = resumeData.institution;
            document.getElementById('graduationYear').value = resumeData.graduationYear;
            document.getElementById('skills').value = resumeData.skills;
            // Populate the resume display section with editable content
            var resumeHTML = "\n                <h3>Personal Information</h3>\n                <p><b>Name:</b> <span contenteditable=\"true\">".concat(resumeData.name, "</span></p>\n                <p><b>Email:</b> <span contenteditable=\"true\">").concat(resumeData.email, "</span></p>\n                <p><b>Phone:</b> <span contenteditable=\"true\">").concat(resumeData.phone, "</span></p>\n                <h3>Experience</h3>\n                <p><b>Job Title:</b> <span contenteditable=\"true\">").concat(resumeData.experienceTitle, "</span></p>\n                <p><b>Company:</b> <span contenteditable=\"true\">").concat(resumeData.experienceCompany, "</span></p>\n                <p><b>Dates:</b> <span contenteditable=\"true\">").concat(resumeData.experienceDates, "</span></p>\n                <h3>Education</h3>\n                <p><b>Degree:</b> <span contenteditable=\"true\">").concat(resumeData.degree, "</span></p>\n                <p><b>Institution:</b> <span contenteditable=\"true\">").concat(resumeData.institution, "</span></p>\n                <p><b>Graduation Year:</b> <span contenteditable=\"true\">").concat(resumeData.graduationYear, "</span></p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(resumeData.skills, "</p>\n            ");
            resumeContent.innerHTML = resumeHTML;
        }
    }
});
