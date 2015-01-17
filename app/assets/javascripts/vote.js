$(function(){
  $('.ajax-vote').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    var link = $(this);
    var url = link.attr('href');
    // alert("got to " + url);
    $.post(url, {}, function(response){
      //response.result, response.votes
      link.next('.vote-count').text(response.votes);
      if(response.result){
        link.before('<i class="glyphicon glyphicon-chevron-up" style="color:red"></i>')
        link.remove();
      } else {
        alert("You already voted on this.");
      };

    },'json');
  });
});

