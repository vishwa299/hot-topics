// GET THE REFERENCES
const container = document.querySelector('.dynamic-html');
const links = document.querySelectorAll('.nav-link');

// Function to load requested partial
const loadContent = async (urlFeed) => {
   try {
      const response = await fetch(urlFeed);
      if (response.ok) {
         const data = await response.text();
         container.innerHTML = data;
      } else {
         console.error('Error loading content:', response.status);
      }
   } catch (err) {
      console.error('Error:', err);
   }
};

// Function to handle partial selection
const selectContent = (event) => {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   event.preventDefault();

   // REMOVE "active" CLASS FROM ALL LINKS
   links.forEach(link => {
      link.classList.remove('active');
   });

   // GET THE CLICKED LINK
   const clickedLink = event.target;

   // ADD "active" CLASS TO THE CLICKED LINK
   clickedLink.classList.add('active');

   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   const urlFeed = clickedLink.getAttribute('href');

   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
   loadContent(urlFeed);
};

// Register links for click event with selectContent as the event handler
links.forEach(link => {
   link.addEventListener('click', selectContent);
});

// Initial content load
loadContent('./partials/home.html');
