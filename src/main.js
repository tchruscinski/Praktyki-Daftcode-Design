let options = document.querySelectorAll('.option'),
    object  = document.querySelector('svg');

object.addEventListener('click', function(){
    object.classList.add("active");
    setTimeout(function(){
    object.classList.remove("active");
    }, 2000);
});

options.forEach(function(option){
    option.addEventListener('click', function(){
      options.forEach(function(o){
            o.classList.remove("visited");
          });
      option.classList.toggle("visited");
    });
});
