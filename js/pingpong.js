//business

var numbersToBePingponged = [];

var pingPong = function(number) {
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      numbersToBePingponged.push("pingpong");
    } else if (index % 5 === 0) {
      numbersToBePingponged.push("pong");
    } else if (index % 3 === 0) {
      numbersToBePingponged.push("ping");
    } else {
      numbersToBePingponged.push(index);
    }
  }

};
//front-end

$(document).ready(function() {
  $("form#pongpi").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    pingPong(number);

    numbersToBePingponged.forEach(function(number) {
      $("#output").append('<li>' + number + "</li>");

    });

  });
});
