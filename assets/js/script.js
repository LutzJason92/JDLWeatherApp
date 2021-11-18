var citySearch = $("#fetchCity")

var currentTimeDateEl = moment().format("dddd MMM Do, YYYY");
$("#dateEl").text("Today is " + currentTimeDateEl + ". The weather in " )

// Store City to Local Storage
$(".searchButton").on("click", function(event){
    event.preventDefault();
    var searchFor = $("#searchField").val();
    localStorage.setItem("city", searchFor)
    console.log(searchFor) 
})



function getApi() {
 

}

