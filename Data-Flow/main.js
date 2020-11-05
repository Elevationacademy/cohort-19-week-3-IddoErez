const posts= [
    {name: "Doron", text: "Congratulations"},
    {name :"Yossi", text: "Best Wishes"},
    {name: "Rami", text: "Mazal Tov"}
]

const render = function(){
    for (let post of posts) {
         let newPost= $("<div>" + post.name + ": " + post.text + "</div>")
         $("body").append(newPost)
    }
}
    $("#btn").on("click", function(){
    
    const newName = $("#name").val()
    $('#name').val('')
    const newText = $("#birthDayWish").val()
    $('#birthDayWish').val('')
    posts.push({name: newName, text :newText})
    render()
    })

 



