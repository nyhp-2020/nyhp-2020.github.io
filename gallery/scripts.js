
let currentPhoto = 0;

let imagesData = [{
    photo: 'images/P1010038.jpg',
    title: 'Bled 1',
    description: 'At lake Bled.'
},
{
    photo: 'images/P1010043.jpg',
    title: 'Bled 2',
    description: 'At lake Bled.'
},
{
    photo: 'images/P1010051.jpg',
    title: 'Bled 3',
    description: 'At lake Bled.'
},
{
    photo: 'images/P1010054.jpg',
    title: 'Bled 4',
    description: 'Bled castle foreground of mountains.'
},
{
    photo: 'images/P1010055.jpg',
    title: 'Bled 5',
    description: 'At lake Bled.'
},
{
    photo: 'images/P1010098.jpg',
    title: 'Malta Hochalmstraße',
    description: 'Kölnbrein barrier,Airwalk viewpoint.'
},
{
    photo: 'images/P1010101.jpg',
    title: 'Malta Hochalmstraße',
    description: 'Reservoir behind the Kölnbrein barrier.'
}
];

//load thumbnails
imagesData.forEach((item, index) => {
    $('.thumbnail-container')
        .append(`<div class="thumbnail" data-index="
        ${index}"><div class="title">${item.title}</div><img src="${item.photo}" ></div>`);
});

$('#photo').attr('width', "100%");
$('#photo').attr('height', "100%");

loadPicture(currentPhoto);

//left button
$("#lb").on('click', function () {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPicture(currentPhoto);
});

//right button
$("#rb").on('click', function () {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPicture(currentPhoto);
});

//thumbnails
$('.thumbnail-container').click((event) => {
    currentPhoto = parseInt($(event.target)
        .parent()
        .attr("data-index"));
    loadPicture(currentPhoto);
});

function loadPicture(num) {
    $('#photo').attr('src', imagesData[num].photo);
    $("#photo-title").text(imagesData[num].title);
    $("#photo-description").text(imagesData[num].description);
    //selectThumbnail
    $("div.thumbnail").css("border-color", "grey");
    $("div.thumbnail").eq(num).css("border-color", "#de6f4e");
}

//thumbnails
/* $('.thumbnail-container').click((event) => {
    loadPicture(currentPhoto = parseInt($(event.target)
        .parent()
        .attr("data-index")));
}); */

/* imagesData.forEach((item, index) => {
    alert($('.thumbnail-container')
    .append(`<div class="thumbnail" data-index="${index}"><img src="${item.photo}" ></div>`)
    .children("div:last-child") //last appended child of ".thumbnail-container" !
    .attr("data-index"));
}); */


/* $('.thumbnail').click((event) => {
    loadPicture(currentPhoto = parseInt($(event.target).parent().attr("data-index")));
}); */
