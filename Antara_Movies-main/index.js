// const icon = document.getElementById("nav-icon");
// const link1 = document.getElementById('link1');
// const link2 = document.getElementById('link2');
// const link3 = document.getElementById('link3');
// const link4 = document.getElementById('link4');
// const link5 = document.getElementById('link5');
// const link6 = document.getElementById('link6');
// const link7 = document.getElementById('link7');
// const link8 = document.getElementById('link8');

// const toggleClass = () => {
//     const navbar = document.getElementById("nav-navigation");
//     navbar.classList.toggle("active-nav")
// }
// icon.addEventListener('click', () => { toggleClass() })
// link1.addEventListener('click', () => { toggleClass() })
// link2.addEventListener('click', () => { toggleClass() })
// link3.addEventListener('click', () => { toggleClass() })
// link4.addEventListener('click', () => { toggleClass() })
// link5.addEventListener('click', () => { toggleClass() })
// link6.addEventListener('click', () => { toggleClass() })
// link7.addEventListener('click', () => { toggleClass() })
// link8.addEventListener('click', () => { toggleClass() })




function myFunction() {
    var x = document.getElementById("myTopnav");
    let banner = document.getElementById("banner");
    if (x.className === "topnav") {
        x.className += " responsive";
        banner.className.add("rm");
    } else {
        x.className = "topnav";
    }
}

var mode = 'close'
function openclosemenu() {
    if (mode == 'open') {
        document.getElementsByClassName('dropdown-content').style.display = 'none'
        mode = 'close'
    } else {
        document.getElementsByClassName('dropdown-content').style.display = 'block'
        mode = 'open'
    }
    
}