/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//performance 

const startTime = performance.now();


// The Global variables
// the navigation scroll into section 
// build the nav

// add event listener to the dom content
document.addEventListener('DOMContentLoaded', function () {

    //querySelectorAll select all sectios 
    let all__sections = document.querySelectorAll('section');

    // select ul
    let ul = document.querySelector('ul');

    //loop over all sections 
    all__sections.forEach(function(section, index ){

        let nav = section.getAttribute('data-nav');

        // create elemnt 
        const li = document.createElement('li');

        const link = document.createElement('a');

        const text = document.createTextNode(nav);

        //add fragment 
        const fragment = document.createDocumentFragment();

        //append child 
        link.appendChild(text);

        li.appendChild(link);

        fragment.appendChild(li);


        ul.appendChild(fragment);

        //Event listener 
        ul.addEventListener("click",(event)=>{
          function myFunction() {
            var elmnt = document.getElementById("section",event.target);
            elmnt.scrollIntoView({behavior :"smooth"});
          }
        
    
    
      
})

})

});
    
    
    
    
    


// Add class 'active' to section when near top of viewport
function myFunction() {
    var div = document.getElementById("myDiv");

    var rect = div.getBoundingClientRect();

// loop over all sections 
    all__sections.forEach((section) => {

      // add active section
    if (rect.top >= 0 && rect.top < 250) {
      document.querySelectorAll("a")[i].classList.add("active");
      sec[i].classList.add("active");
      }
      else {
        // remove the active section
      document.querySelectorAll("a")[i].classList.remove("active");
      sec[i].classList.remove("active");

      x = rect.left;
      y = rect.top;
      w = rect.width;
      h = rect.height;
      alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);


    }
   
       
  });
  }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
function active(section){

  // select all links 'a'
  let links =document.querySelectorAll("a");
  let dataId = section.getAttribute("data-nav");

//loop over links
  links.forEach(link=> {

    //remove the active link from the first section
    link.classList.remove("active-link");
      if (link.textContent==dataId){

        //add active link to the active section
        link.classList.add("active-link");


      }


  });

};


    
    
  
// endTime performance

const endTime = performance.now();

console.info('This Website Took' + (endTime-startTime) +'millesecond To Load' );

