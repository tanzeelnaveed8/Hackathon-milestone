const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Ensure the skills section starts visible
skills.style.display = 'block'; 

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});
