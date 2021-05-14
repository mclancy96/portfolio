// let getDocumentHeight = () => {
//     return Math.max(
//         Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
//         Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
//         Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//     );
// }

// $(window).scroll(() => {
//     var docHeight = getDocumentHeight();
//     if($(window).scrollTop() + window.innerHeight == docHeight){
//                 // enter your code here
//     }
// });


$(window).on("load",() => {
    $(window).scroll(() => {
        // var docHeight = getDocumentHeight();
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        // console.log("docHeight: ", docHeight);
        console.log("windowBottom: ", windowBottom)
        $(".scroll-fade").each(function() {
            let objectTop = $(this).offset().top;
            if (objectTop < windowBottom) { 
                if ($(this).css("opacity")==0) {
                    $(this).fadeTo(500,1);
                }
            } else {
                if ($(this).css("opacity")==1) {
                    $(this).fadeTo(500,0);
                }
            }
        });
    }).scroll(); 
});