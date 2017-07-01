$(document).ready(function(){
    $('searchbtn').on('click',function(){
        $('result').html('');
        var movie=$('search').val();
        $getJSON('https://api.themoviedb.org/3/movie/550?api_key=3d34e72c9badeb4e4254c09ec0109d8e',function(json){
            displayResult(json);
        });
    });
     function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["search"];
        $("#tempelate").tmpl(movieArray).appendTo("#result");
      }
    }
});