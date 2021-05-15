$(window).on("load",() => {
    $(window).scroll(() => {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        console.log("windowBottom: ", windowBottom)
        $(".scroll-fade").each(function() {
            let objectTop = $(this).offset().top;
            if (objectTop < windowBottom) { 
                if ($(this).css("opacity")==0) {
                    $(this).fadeTo(500,1);
                }
            } 
            // else {
            //     if ($(this).css("opacity")==1) {
            //         $(this).fadeTo(500,0);
            //     }
            // }
        });
    }).scroll(); 
});