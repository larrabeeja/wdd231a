// Display current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Display last modified date
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Sample course data
const courses = [
    { name: "WDD 101", completed: true, credits: 3 },
    { name: "WDD 201", completed: false, credits: 3 },
    { name: "CSE 111", completed: true, credits: 4 },
    { name: "CSE 120", completed: false, credits: 4 },
];

// Dynamically display course cards
const courseCardsContainer = document.getElementById('course-cards');
courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.textContent = `${course.name} - ${course.completed ? 'Completed' : 'Not Completed'}`;
    courseCard.style.color = course.completed ? 'green' : 'red'; // Different style based on completion
    courseCardsContainer.appendChild(courseCard);
});

// Calculate total credits required
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
console.log(`Total Credits: ${totalCredits}`);
