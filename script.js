
function ajax(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response =JSON.parse(this.responseText);
        var grsdata = '';
    for(var i = 0; i < response.length; i++) {
      grsdata += '<tr>';
      grsdata += '<td>' + response[i].serialnum + '</td>';
      grsdata += '<td>' + response[i].name + '</td>';
      grsdata += '<td>' + response[i].quantity + '</td>';
      grsdata += '<td>' + response[i].unit + '</td>';
      grsdata += '<td>' + response[i].department+ '</td>';
      grsdata += '<td>' + response[i].notes+ '</td>';
      grsdata += '</tr>';
    }
    document.querySelector('.grocerylist tbody').innerHTML = grsdata;      
    }
}

xhttp.open("GET","grocery.json",true);
xhttp.send();

}