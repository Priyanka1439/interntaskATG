document.getElementsByClassName('tablinks')[0].click()
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


/*$(document).ready(function(){
    $(".with-color").click(function () {    
       if($(this).hasClass("btn-primary"))
       {
            $(this).addClass("btn-secondary");
            $(this).removeClass("btn-primary");
       }
       else{
            $(this).addClass("btn-primary");
            $(this).removeClass("btn-secondary");
       }
    });

    $(".pushme2").click(function(){
        $(this).text(function(i, v){
           return v === 'Join Group' ? 'Leave Group' : 'Join Group'
        });
    });
});*/