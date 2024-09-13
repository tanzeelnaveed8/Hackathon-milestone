// Get references to the form and display areas
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('Shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent the page from reloading on form submission

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experienceTitle = (document.getElementById('experienceTitle') as HTMLInputElement).value;
    const experienceCompany = (document.getElementById('experienceCompany') as HTMLInputElement).value;
    const experienceDates = (document.getElementById('experienceDates') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        experienceTitle,
        experienceCompany,
        experienceDates,
        degree,
        institution,
        graduationYear,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Save data locally

    // Generate resume content dynamically
    const resumeHTML = `
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Experience</h3>
        <p><b>Job Title:</b> <span contenteditable="true">${experienceTitle}</span></p>
        <p><b>Company:</b> <span contenteditable="true">${experienceCompany}</span></p>
        <p><b>Dates:</b> <span contenteditable="true">${experienceDates}</span></p>
        <h3>Education</h3>
        <p><b>Degree:</b> <span contenteditable="true">${degree}</span></p>
        <p><b>Institution:</b> <span contenteditable="true">${institution}</span></p>
        <p><b>Graduation Year:</b> <span contenteditable="true">${graduationYear}</span></p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume in the preview section
    resumeContent.innerHTML = resumeHTML;

    // Generate a shareable URL with the username
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    const { jsPDF } = window as any; // Make sure jsPDF is available globally
    const doc = new jsPDF();

    // Get the content from the resume preview section
    const resumeHTML = resumeContent.innerText;
    doc.text(resumeHTML, 10, 10);

    // Save the content as a PDF file
    doc.save('resume.pdf');
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Fetch and autofill the form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('experienceTitle') as HTMLInputElement).value = resumeData.experienceTitle;
            (document.getElementById('experienceCompany') as HTMLInputElement).value = resumeData.experienceCompany;
            (document.getElementById('experienceDates') as HTMLInputElement).value = resumeData.experienceDates;
            (document.getElementById('degree') as HTMLInputElement).value = resumeData.degree;
            (document.getElementById('institution') as HTMLInputElement).value = resumeData.institution;
            (document.getElementById('graduationYear') as HTMLInputElement).value = resumeData.graduationYear;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;

            // Populate the resume display section with editable content
            const resumeHTML = `
                <h3>Personal Information</h3>
                <p><b>Name:</b> <span contenteditable="true">${resumeData.name}</span></p>
                <p><b>Email:</b> <span contenteditable="true">${resumeData.email}</span></p>
                <p><b>Phone:</b> <span contenteditable="true">${resumeData.phone}</span></p>
                <h3>Experience</h3>
                <p><b>Job Title:</b> <span contenteditable="true">${resumeData.experienceTitle}</span></p>
                <p><b>Company:</b> <span contenteditable="true">${resumeData.experienceCompany}</span></p>
                <p><b>Dates:</b> <span contenteditable="true">${resumeData.experienceDates}</span></p>
                <h3>Education</h3>
                <p><b>Degree:</b> <span contenteditable="true">${resumeData.degree}</span></p>
                <p><b>Institution:</b> <span contenteditable="true">${resumeData.institution}</span></p>
                <p><b>Graduation Year:</b> <span contenteditable="true">${resumeData.graduationYear}</span></p>
                <h3>Skills</h3>
                <p contenteditable="true">${resumeData.skills}</p>
            `;
            resumeContent.innerHTML = resumeHTML;
        }
    }
});


