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
    // create project-card
    const div = document.createElement('div');
    div.setAttribute('class', 'project-card');
    div.innerHTML =   '<div class="project-text">' +
                          '<span class="project-title">' + data[i].title + '</span>' +
                          '<p class="project-description">' + data[i].description + '</p>' + 
                          '<div class="project-stack-container"></div>' +
                          '<div class="project-links-container">' +
                            '<a href="' + data[i].links + '" class="project-links">' + data[i].linkText + '</a>' +
                          '</div>' +
                      '</div>'+
                      '<picture> ' +
                        '<source media="(max-width: 768px)" srcset="' + data[i].mobileImage + '">' +
                        '<source media="(min-width: 1024px)" srcset="' + data[i].imagePath + '"> ' +
                        '<img  src="' + data[i].imagePath + '"' +
                              'class="project-image">' +
                      '</picture>' 
                      ;

    //Reads the values of the "stackitem" key:value pair and creates a span for each one (project-stack-item);
    for (let item of Object.values(data[i].stackItem)) {
      const span = document.createElement("span");
      span.setAttribute('class', 'project-stack-item');
      span.innerHTML = item;

    // add project-card to main container;
    document.getElementById("project-container").appendChild(div);
    // add project-stack-item to project-card;
    div.querySelector(".project-stack-container").appendChild(span);

    }
  }
}
