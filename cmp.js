// JavaScript for adding a new resource
function addResource(category, resourceName, resourceLink) {
    const list = document.getElementById(category);
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = resourceLink;
    newLink.textContent = resourceName;
    newItem.appendChild(newLink);
    list.appendChild(newItem);
}

// Example of adding a new academic resource dynamically
addResource('academic-resources', 'Research Center', '#');

// Example of adding a new student service dynamically
addResource('student-services', 'Student Union', '#');

// Example of adding a new recreational facility dynamically
addResource('recreational-facilities', 'Tennis Courts', '#');
