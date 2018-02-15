// Code goes here

$(document).ready(() => {
  "use strict"
        let wikiEntry
        let submittedSearch
     
        var keyEnterSubmit = () => {
            wikiEntry = $('#wikiEntry').val()
            
            $('.contain3').addClass("animated fadeOut")
            //alert(wikiEntry)
            setTimeout(()=>{
                $('.contain3').html('<div class="col"></div>')
                $('.contain').append('<h4>or random</h4>')
            },1000)
            
            
            //$('button').addClass('animated bounce')            
        }
        
        $('#wikiEntry').keypress(x => {
            if(x.charCode == 13){
                keyEnterSubmit()
            }
        })
        
        $('#submittedSearch').on('click', () => {
            keyEnterSubmit()
        })    
    
 /* $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?',
    data: 'action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2',
    dataType: 'jsonp',
    type: 'GET',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
         $(".wik").html(JSON.stringify(data));
    }
} )
.fail(function(){
  $(".wik").html('No work.');
  console.log('Error');
})
.always( function(){
  console.log('Done');
});*/
    
})
        


    




/*

"search" data:
'action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2'

"random" data: 'action=query&generator=random&grnnamespace=0&grnlimit=2&prop=info&format=json&formatversion=2'

$(document).ready(function(){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2", function(a){
  $(".wik").html(JSON.stringify(a));
}, 'jsonp')
  .fail( function(){
    $(".wik").html("No workie.");
  })
  .always( function(){
    console.log('Done');
  });
});
*/
    