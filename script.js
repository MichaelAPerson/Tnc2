function home() {
    document.getElementById('homeBTN');
    window.location.replace('index.html')
}

function home1() {
    document.getElementById('homeBTN');
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var menuToggle = document.getElementById("menuToggle");

    if (sidenav.style.height === "250px") {
        sidenav.style.height = "0";
        document.body.style.overflow = "auto"; // Re-enable body scroll
        menuToggle.checked = false;
    } else {
        sidenav.style.height = "250px";
        document.body.style.overflow = "hidden"; // Disable body scroll
        menuToggle.checked = true;
    }
}


