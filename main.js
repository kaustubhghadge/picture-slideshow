 $(document).ready(function() {

    //getting data from REST API
     $.ajax({
         url: 'http://api.new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos',
         type: 'GET',
         success: function(data) {
             var urlArr = [];
             for (let item of data) {

                 urlArr.push(item.url);
             }
             var i = 0;
             $('img').each(function() {
                 var curSrc = $(this).attr('src');
                 if (curSrc === "") {
                     $(this).attr('src', urlArr[i]);
                     i++;
                 }
             });
         },
         error: function(e) {
             console.log(e);
         }
     });

     var counter = 0, // to keep track of current slide
         $items = $('.slideshow figure'),
         numItems = $items.length;

     // cycle the slides, showing the next or previous slide and hiding all the others
     var showCurrent = function() {
         var itemToShow = Math.abs(counter % numItems); // uses remainder operator to get the actual index of the element to show  
         $items.removeClass('show');
         $items.eq(itemToShow).addClass('show');
         //showSlides();
     };

     // add click events to prev & next buttons 
     $('.next').on('click', function() {
            nextSlides();
            clearInterval();
     });
     $('.prev').on('click', function() {
         counter--;
         showCurrent();
         clearInterval();

     });


     function nextSlides() {
        counter++;
        showCurrent();    
        }

    setInterval(nextSlides, 4000); // Change image every 4 seconds


 });