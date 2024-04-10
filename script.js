function get_data() {
    $.getJSON(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
        (e) => {
            $(".category").html("Category: " + e.category);
            $(".joke").html(e.joke);
        }
    );
}

$(document).ready(function () {
    get_data();

    $("button").on("click", () => {
        get_data();
    });

    $(document).ajaxError(function () {
        alert("Please wait a few seconds. Also check your internet!");
    });
});
