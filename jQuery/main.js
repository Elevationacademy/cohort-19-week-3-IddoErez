
//---------------------------------------------------------------
//--------------Exercise 1-------------------------------------
$("#button").on("click", function(){
    const newPerson = $('#input').val()
    $('#input').val('')
    $('list').append(`<li>${newPerson}</li>`)

  })

  // ex2-------------------------------------------------
  $("list").on("click",".name",  function(){
    $(this).remove(".name")
   })

  //--------------------------------------  ex4
  
