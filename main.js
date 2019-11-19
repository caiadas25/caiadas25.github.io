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

const projectContainer = document.getElementById("project-container");
  for (let i = 0; i < data.length; i++) {
  // create div
  const div = document.createElement('div');
  div.setAttribute('class', 'project-card');
  div.innerHTML =   '<div class="project-text">'+
                        '<span class="project-title">' + data[i].title + '</span>' +
                        '<p class="project-description">' + data[i].description + '</p>' + 
                        '<div class="project-stack-container"><div class="project-stack-item">'+ data[i].stackItem +'</div></div>' +
                        '<div class="project-links-container"><a href="' + data[i].links + '" class="project-links">' + data[i].linkText + '</a></div>' +
                    '</div>'+
                    '<img class="project-image" src="' + data[i].imagePath + '"/>';
  
  // add div to main container
  projectContainer.appendChild(div);
  }
}



// TESTE
var json = [{
  "id": "1", 
  "stack": "react",
},
{
  "id": "2", 
  "stack": "vue",
},
{
  "id" : "5", 
  "stack"   : {
    "1" : "html",
    "2" : "css",
    "3" : "js",
  },
},
];

for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  var stringified = JSON.stringify(obj.msg);
  console.log(stringified);
}

//TESTE