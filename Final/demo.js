$(document).ready(function() {
  /*
  console.log( "ready!" );
  console.log("Hello!!");
  alert("I am an alert message");
  */
  var firstname = "Don";
  console.log("Hello " + firstname);
  firstname = "Steve";
  console.log("Hello " + firstname);
  var foods = ["pineapple", "chocolate", "coconut", "kebap"]
  console.log(foods.length);

  for (var i = 0; i < foods.length; i = i + 1) {
    console.log(foods[i]);
    $('#tastythings').append('<li>' + foods[i] + '</li>');


  }

  $.ajax({
    url: 'https://randomuser.me/api/?results=100',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      console.log(data.results[0].name.first);
      //$("#person").append( + data.results[0].name.first + ' ' + data.results[0].name.last );
      $.each(data.results, function(key, value){
        $('#person').append('<div class = "col-md-4"><h1>' + value.name.first + ' ' + value.name.last + '<br>' +
        value.nat.toLowerCase() + '<span class="flag-icon flag-icon-'+value.nat.toLowerCase()+'"></span></h1> <img src="'+ value.picture.large +'" class="img-fluid rounded-circle"><div><i class="fab fa-twitter"></i></div></div>')

      })
    }
  });

  var menu = [
    {
      'label': 'Home',
      'url' : 'index.html'
    },
        {
      'label': 'Team',
      'url' : 'index.html'
    },
    {
      'label': 'About',
      'url' : 'about.html'
    },
    {
      'label': 'Menu',
      'url' : 'menu.html'
    },
    {
      'label': 'Contact Me',
      'url' : 'contact.html'
    }
  ]

  $.each(menu, function(key,value){
    $('#main-menu').append('<li class="nav-item active"><a class="nav-link" href="'+ value.url +'">'+ value.label +'</a></li>');
  });



});
