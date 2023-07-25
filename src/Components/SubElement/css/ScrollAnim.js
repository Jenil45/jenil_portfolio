
const observer= new IntersectionObserver((entries) => {
    console.log("Hi");
    entries.forEach((entry) => {
      if(entry.isIntersecting)
      {
        entry.target.classList.add('show');
      }
      else
      {
        entry.target.classList.remove('show');
      }
    }) 
  })


  const hiddenElement = document.querySelectorAll('.try');
  hiddenElement.forEach((el) => observer.observe(el));

