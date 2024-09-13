// Function to generate resume content
function generateResume() {
    // Get values from the form
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var jobTitle = document.getElementById('experienceTitle').value.trim();
    var company = document.getElementById('experienceCompany').value.trim();
    var dates = document.getElementById('experienceDates').value.trim();
    var degree = document.getElementById('degree').value.trim();
    var institution = document.getElementById('institution').value.trim();
    var gradYear = document.getElementById('graduationYear').value.trim();
    // Basic validation
    if (!name || !email || !phone || !jobTitle || !company || !dates || !degree || !institution || !gradYear) {
        alert("Please fill out all fields.");
        return;
    }
    // Construct the resume content
    var resumeContent = "\n        <h2><span contenteditable=\"true\">".concat(name, "</span></h2>\n        <p>Email:<span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p>Phone:<span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n        <h3>Experience</h3>\n        <p><strong>Title:</strong><span contenteditable=\"true\"> ").concat(jobTitle, "</span></p>\n        <p><strong>Company:</strong> <span contenteditable=\"true\">").concat(company, "</span></p>\n        <p><strong>Dates:</strong> <span contenteditable=\"true\">").concat(dates, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n        <p contenteditable=\"true\"><strong>Institution:</strong> ").concat(institution, "</p>\n        <p contenteditable=\"true\"><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n    ");
    // Update the resume preview
    document.getElementById('resumeContent').innerHTML = resumeContent;
}
