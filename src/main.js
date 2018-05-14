let options = document.querySelectorAll('.option'),
    object  = document.querySelector('svg'),
  hamburger = document.querySelector('#hamburger_menu'),
     drawer = document.querySelector('#drawer'),
       main = document.querySelector('main');



object.addEventListener('click', function(){
    object.classList.add("clicked");
    setTimeout(function(){
    object.classList.remove("clicked");
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

hamburger.addEventListener('click', function(e) {
      console.log('hello');
      drawer.classList.toggle('open');
      e.stopPropagation();
    });

main.addEventListener('click', function() {
      drawer.classList.remove('open');
    });
