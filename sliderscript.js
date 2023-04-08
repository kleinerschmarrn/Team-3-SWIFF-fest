let slider=tns({
    container: ".my-slider",
    "slideBy" : "1",
    "speed" : 400,  //milliseconds//
    "nav" : false,
    autoplay: true,
    controls: false, // remove next prev buttons //
    autoplayButtonOutput: false,  // remove stop button //
    responsive : {
        1600: {
        items: 4,    // at 1600px - 4 images //
        gutter: 20  // padding between images //
    },
        1024: {
        items: 3,    // at 1024px - 3 images //
        gutter: 20  // padding between images //
    },
    768: {
        items: 2,    // at 1024px - 3 images //
        gutter: 20  // padding between images //
    },
    480: {
        items: 1,    // at 1024px - 3 images //
    }
}
})