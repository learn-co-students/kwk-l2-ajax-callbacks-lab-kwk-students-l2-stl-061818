
let url; 
let input; 
$('#submitButton').click(function () {
        input = $('#searchTerms').val();
        // console.log(input);
        searchRepositories(input);
    });

function searchRepositories(searchTerms){
  $.ajax ({
  url:"https://api.github.com/search/code?q=addClass+user:mozilla",
  dataType:'json',
  data:{
    api_key:'7070cfa74c365a226d3643f825b8bf3bd30fc16b',
    q: input,
    },
    success: resp => { //on success, I want to create a response that is an object that has a key called url
    //  console.log(resp);
    url= resp.data['0'].embed_url;
     $('#firstDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
     url= resp.data['1'].embed_url
     $('#secondDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
     url= resp.data['2'].embed_url
     $('#thirdDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
     url= resp.data['3'].embed_url
     $('#fourthDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
     url= resp.data['4'].embed_url
     $('#fifthDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
     url= resp.data['5'].embed_url
     $('#sixthDiv',).html(`<iframe src=${url} frameborder='0' allowfullscreen='false' webkitallowfullscreen='false' mozallowfullscreen='false'>`)
    }

  });
}