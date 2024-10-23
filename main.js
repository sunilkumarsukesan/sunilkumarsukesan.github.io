// Accordion script
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';

       // Toggle the arrow's rotation
            this.classList.toggle('active');

             // Check if the active class is being added/removed
                  console.log('Active classes:', this.classList);
    });
  });
});

// Fetch GitHub repositories and display them
fetch('https://api.github.com/users/sunilkumarsukesan/repos') // Replace 'your-username' with your actual GitHub username
  .then(response => response.json())
  .then(repos => {
    const repoList = document.getElementById('repo-list');
    repos.forEach(repo => {
      const listItem = document.createElement('li');
      const projectLink = document.createElement('a');
      projectLink.href = repo.html_url; // URL to the repository
      projectLink.textContent = repo.name; // Name of the repository
      projectLink.target = "_blank"; // Open link in a new tab
      listItem.appendChild(projectLink);
      repoList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching repositories:', error));
