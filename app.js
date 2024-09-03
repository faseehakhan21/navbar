
      document.addEventListener("DOMContentLoaded", (event) => {
        const blog = document.querySelectorAll(".dropdown");
      blog.addEventListener("click", function (event) {
        const dropdown = document.querySelectorAll(".dropdown-menu");
        dropdown.classList.toggle("active");
      });
      });

     
      document.querySelector('.menu-toggle').addEventListener('click', function() {
        const menu = document.querySelector('.topnav ul');
        const toggleButton = this;
      
        menu.classList.toggle('active');
        toggleButton.classList.toggle('open');
      });


    document.addEventListener("DOMContentLoaded", (event) => {
      const sidebar = document.getElementById('sidebar');
      const toggleBtn = document.getElementById('togglebtn');
      const body = document.body;
  

      toggleBtn.addEventListener("click", () => {
          body.classList.toggle('sidebar-open');
      });
  });
  

