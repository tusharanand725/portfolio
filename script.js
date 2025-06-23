// Toggles the visibility of a semester section
function toggleSemester(num) {
  const content = document.getElementById(`sem${num}`);
  const allContents = document.querySelectorAll('.semester-content');

  allContents.forEach(c => {
    if (c !== content) c.classList.add('hidden');
  });

  content.classList.toggle('hidden');
}

// Toggles the visibility of an individual course section (FCH, Notes, etc.)
function toggleCourse(header) {
  const content = header.nextElementSibling;
  if (content) {
    content.classList.toggle('hidden');
  }
}
