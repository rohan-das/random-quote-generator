$(document).ready(function(){
  var theQuote;
  var theAuthor;
  var flag= 0;
  
  $(".new-quote-button").on("click",function(){
    flag =1;
   $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en", function(data){
     
     theQuote = data.quoteText
     theAuthor = data.quoteAuthor
     $(".quote").text(theQuote + " - ")
     $(".author").text(theAuthor)
   });
  });
  
  
  $("#tweetit").on("click",function(){
    
    
    if(flag==1){
    window.open("https://twitter.com/intent/tweet?text="+ theQuote);
    }
    else{
      window.open(href="https://twitter.com/intent/tweet?text=Those two friends never let you live peacefully.")
    }
  });
  
});

//https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&lang=en&format=jsonp&jsonp=?
//using format as "jsonp&jsonp=?" removed the problem.