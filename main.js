fetch('projects.json')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  getProjects(data);
})
.catch(function (err) {
  console.log(err);
});

async function getProjects(){
const response = await fetch('projects.json');
const data = await response.json();


  for (let i = 0; i < data.length; i++) {
    // create div
    const div = document.createElement('div');
    div.setAttribute('class', 'project-card');
    div.innerHTML =   '<div class="project-text">'+
                          '<span class="project-title">' + data[i].title + '</span>' +
                          '<p class="project-description">' + data[i].description + '</p>' + 
                          '<div class="project-stack-container"></div>' +
                          '<div class="project-links-container"><a href="' + data[i].links + '" class="project-links">' + data[i].linkText + '</a></div>' +
                      '</div>'+
                      '<img class="project-image" src="' + data[i].imagePath + '"/>';
  


  for (let item of Object.values(data[i].stackItem)) {
    const span = document.createElement("span");
    span.setAttribute('class', 'project-stack-item');
    span.innerHTML = item;

  // add project-card to main container
  document.getElementById("project-container").appendChild(div);
  // add project-stack-item to project-card
  div.querySelector(".project-stack-container").appendChild(span);

    }
  }
}

