function copy_discord() {
    const discord_name = "J03daSchm0#6160";

    const temp = document.createElement('textarea');
    temp.value = discord_name;
    document.body.appendChild(temp);

    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    var tooltip = document.getElementById("discord_tooltip");
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";
    tooltip.innerHTML = "Copied!";
}

function mouse_enter_discord_button(){
    var tooltip = document.getElementById("discord_tooltip");
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";
}

function mouse_exit_discord_button() {
    var tooltip = document.getElementById("discord_tooltip");
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
    tooltip.innerHTML = "Copy to Clipboard";
}