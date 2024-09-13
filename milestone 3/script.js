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
    var resumeContent = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n\n        <h3>Experience</h3>\n        <p><strong>Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Dates:</strong> ").concat(dates, "</p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institution:</strong> ").concat(institution, "</p>\n        <p><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n    ");
    // Update the resume preview
    document.getElementById('resumeContent').innerHTML = resumeContent;
}
