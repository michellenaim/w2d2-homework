$(document).ready(function() {
    $('td:not(:first-child').hover(function () {
        $(this).css('cursor', 'pointer')
      })

        $('td:not(.title)').click(function() {
            var content = $(this).text();
            var colName = $(this).closest('table').find('th').eq($(this).index()).text();
            if (content != "Not Available") {
              $(this).toggleClass('green')

              if ($(this).hasClass("green")) {
                $('#result').append("<p class='modal-body'>" + content + " at " + colName + "</p>");
              } else {
                $('#result p:contains('+content+')').remove();
              }
            }
        })    
})      