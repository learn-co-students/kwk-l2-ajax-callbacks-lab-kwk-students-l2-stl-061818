$(document).ready(function(){
 })

function searchRepositories(){
 const searchTerms = $( "#searchTerms").val();
 $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
   $(`#results`).html(data);
 })

}

var renderSearchResults = (data) => data.items.map(result => renderSearchResults(result)) 

var renderSearchResults = (result) => 
 return ` 
   <div>
   
   </div>'