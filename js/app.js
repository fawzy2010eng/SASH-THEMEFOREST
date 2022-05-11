// owl carousel 
$('.dashboards .owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        },
        1024: {
            items: 4
        }
    }


})



// controlling views 
var btns = document.querySelectorAll('.demos .btns button');
var views = document.querySelectorAll('.demos .views div');
// console.log(views);
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active')
        }
        this.classList.add('active');
        for (var i = 0; i < views.length; i++) {
            views[i].style.display = "none"
        }
        for (var i = 0; i < views.length; i++) {
            if (views[i].getAttribute('data-target') == this.getAttribute('data-target')) {
                views[i].style.display = "block"
            }
        }
    })
})