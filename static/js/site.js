$(document).ready(function() {
    $(".sidenav").sidenav()
    $(".parallax").parallax()
    $("select").formSelect()
    $(".modal").modal()
    $(".collapsible").collapsible()

    $("#summary_more").hover(function() {
        console.log(123)
        $("#summary_intro").show({ duration: 100, easing: "linear" })
        $(this).hide()
    })
})
