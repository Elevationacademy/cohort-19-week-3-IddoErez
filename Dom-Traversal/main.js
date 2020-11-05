

// $(".remove").on("click", function () {
//     alert($(this).closest(".post").data().id)
// })

// $('button').on('click', function () {
//     let text = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
// })

// $('button').on('click', function() {
//     let text = $(this).closest("div").find("span").text()
//     $("body").append(`<span>${text}</span>`)

//   })

// -----Exercise: ------------------------------------------

const compId = []

$('.generator').on('click', function () {
    console.log("processor ID: " + $(this).closest("div").attr('id'))
    let id = ($(this).closest(".computer").data().id)
    compId.push({ cmp_id: id })
    console.log(compId)
    console.log("BUS: " + $(this).closest(".computer").find(".BUS").text())


})

$('.validator').on('click', function () {
    console.log("Genrator's text: " + $(this).text())
    console.log("MB: " + $(this).closest(".computer").find(".MB").text())
    $(this).closest(".computer").find("span").each(function () {
        console.log($(this).text())

    })
})

