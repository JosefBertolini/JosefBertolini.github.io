var isSidebarToggled = false;
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

function toggle_sidebar() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var toggle = document.getElementById('sidebar-toggle');

    if (!isSidebarToggled) {
        toggle.innerHTML = 'menu_open';
        sidebar.classList.remove('hide-block');
        isSidebarToggled = true;
        return;
    }
    
    toggle.innerHTML = 'menu';
    sidebar.classList.add('hide-block');
    isSidebarToggled = false;
}