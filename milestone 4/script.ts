// Function to generate resume content
function generateResume(): void {
    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();

    const jobTitle = (document.getElementById('experienceTitle') as HTMLInputElement).value.trim();
    const company = (document.getElementById('experienceCompany') as HTMLInputElement).value.trim();
    const dates = (document.getElementById('experienceDates') as HTMLInputElement).value.trim();

    const degree = (document.getElementById('degree') as HTMLInputElement).value.trim();
    const institution = (document.getElementById('institution') as HTMLInputElement).value.trim();
    const gradYear = (document.getElementById('graduationYear') as HTMLInputElement).value.trim();

    // Basic validation
    if (!name || !email || !phone || !jobTitle || !company || !dates || !degree || !institution || !gradYear) {
        alert("Please fill out all fields.");
        return;
    }

    // Construct the resume content
    const resumeContent = `
        <h2><span contenteditable="true">${name}</span></h2>
        <p>Email:<span contenteditable="true"> ${email}</span></p>
        <p>Phone:<span contenteditable="true"> ${phone}</span></p>

        <h3>Experience</h3>
        <p><strong>Title:</strong><span contenteditable="true"> ${jobTitle}</span></p>
        <p><strong>Company:</strong> <span contenteditable="true">${company}</span></p>
        <p><strong>Dates:</strong> <span contenteditable="true">${dates}</span></p>

        <h3>Education</h3>
        <p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
        <p contenteditable="true"><strong>Institution:</strong> ${institution}</p>
        <p contenteditable="true"><strong>Graduation Year:</strong> ${gradYear}</p>
    `;

    // Update the resume preview
    (document.getElementById('resumeContent') as HTMLElement).innerHTML = resumeContent;
}
