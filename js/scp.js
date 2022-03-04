const header = document.querySelector('.head1');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 120) {
        header.classList.add('active')
    
    }
    else{
        header.classList.remove('active');
    }
}
function modal2() {
    document.getElementById("modal1").style.display="block";
    }
    function modal3() {
        document.getElementById("modal1").style.display="none";
        }

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i=0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active2');
        }
        else
         reveals[i].classList.remove('active2');
    
    }
}

const loady = document.querySelector('.cool');
window.onload = function(){
    var lop = window.load;
    console.log(lop);
    if (lop = onload) {
        loady.classList.add('loadys');
    
    }
}  