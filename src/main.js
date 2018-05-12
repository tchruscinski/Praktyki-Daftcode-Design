let options = document.querySelectorAll('.option');

options.forEach(function(option){
    option.addEventListener('click', function(){
      options.forEach(function(o){
            o.classList.remove("visited");
          });
      option.classList.toggle("visited");
    });
});
