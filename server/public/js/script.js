var favArr=[];
var movieObj;
function getMovie(){
 
 $.ajax({
        url:'/search',
        type:'GET',
        data:{name:document.getElementById('movie').value},
        error:function(){
            $('#result').html('<p>Error occured</p>');
        },
        success:function(data){
            
            var result_data=$.parseJSON(data);
            
            var length=result_data.total_results;
            var tableHtml='';
            tableHtml+='<tr>';
            tableHtml+='<th>Title</th>';
            tableHtml+='<th>Poster</th>';
            tableHtml+='<th>Release Date</th>';
            tableHtml+='<th>Action</th>';
            for(var i=0;i<length;i++){
                
                let posterPath='http://image.tmdb.org/t/p/w185/'+result_data.results[i].poster_path;
                console.log(result_data.results[i].title);
                var newObj={Title:result_data.results[i].title,Poster:posterPath,Release_Date:result_data.results[i].release_date};
                movieObj=JSON.stringify(newObj);
                
                tableHtml+='<tr>';
                tableHtml+='<td>'+result_data.results[i].title+'</td>';
                tableHtml+='<td><img src='+posterPath+'></td>';
                tableHtml+='<td>'+result_data.results[i].release_date+'</td>';
                tableHtml+="<td><button onclick='addFavourite(event)' value='"+ movieObj +"'>Add</button></td></tr>";
                tableHtml+='</tr>';
            }
            
            $('#result tbody').html(tableHtml);
            console.log(movieObj);
        }
    
    });   
}
function addFavourite(event){
    var fav=JSON.parse(event.target.value);
    favArr.push(fav);
    console.log(favArr);
}
function favMovie(){
    var favHtml='';
    favHtml+='<tr>';
    favHtml+='<th>Title</th>';
    favHtml+='<th>Poster</th>';
    favHtml+='<th>Release Date</th>';
    favHtml+='</tr>'
    for(var j=0;j<favArr.length;j++){
        favHtml+='<tr>';
        favHtml+='<td>'+favArr[j].Title+'</td>';
        favHtml+='<td><img src='+favArr[j].Poster+'></td>';
        favHtml+='<td>'+favArr[j].Release_Date+'</td>';
        favHtml+='</tr>';
    }
     $('#result tbody').html(favHtml);
}

