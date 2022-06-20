const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.carte'),
    closeElem = document.querySelector('.carte__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menu.addEventListener('click', () => {
    menu.classList.remove('active');
});


$(document).ready(function(){
    $('.contacts_form').validate({
        rules: {
            name: "required",
            privacy: "required",
            email: {
                required: true,
                email: true
            }
            
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            privacy: "Пожалуйста, подтвердите политику конфиденциальности",
            email: {
                required: "Пожалуйста, введите адрес электронной почты",
                email: "Неправильно введен адрес электронной почты"
            }
            
        }
    });
});

$('.contacts_form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.contacts_form').trigger('reset');
    });
    return false;
});

$('.partners_link').on('click', function() {
    $('.partners_photos').toggleClass('partners_photos-active'); 
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1100) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("[href=#up]").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});


   
