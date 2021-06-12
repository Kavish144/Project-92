function add_user() {
    player_1_name = document.getElementById("number1").value;
    player_2_name = document.getElementById("number2").value;

    localStorage.setItem("player_1_name",player_1_name);
    localStorage.setItem("player_2_name",player_2_name);

    window.location.replace("math_page.html");
}