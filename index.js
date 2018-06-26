$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $("#searchTerms").val();
  $.get(`#https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    S(`#results`).html(data);
  })
}

var renderSearchResults = (data) => data.items.map(results => renderSearchResults(result))

var renderSearchResults = (result) => 