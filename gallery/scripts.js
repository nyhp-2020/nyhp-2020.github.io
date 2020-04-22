/* let data = {
    photo: 'images/photo1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
}; */

let currentPhoto = 0;

let imagesData = [{
        photo: 'images/P1010038.jpg',
        title: 'Bled 1',
        description: 'At lake Bled'
    },
    {
        photo: 'images/P1010043.jpg',
        title: 'Bled 2',
        description: 'At lake Bled'
    },
    {
        photo: 'images/P1010051.jpg',
        title: 'Bled 3',
        description: 'At lake Bled'
    },
    {
        photo: 'images/P1010054.jpg',
        title: 'Bled 4',
        description: 'At lake Bled'
    },
    {
        photo: 'images/P1010055.jpg',
        title: 'Bled 5',
        description: 'At lake Bled'
    },
    {
        photo: 'images/P1010098.jpg',
        title: 'Malta Hochalmstraße',
        description: 'Kölnbrein barrier,Airwalk viewpoint'
    },
    {
        photo: 'images/P1010101.jpg',
        title: 'Malta Hochalmstraße',
        description: 'Reservoir behind the Kölnbrein barrier'
    }
];

function loadPicture(num) {
    $('#photo').attr('src', imagesData[num].photo);
    $("#photo-title").text(imagesData[num].title);
    $("#photo-description").text(imagesData[num].description);
}

$('#photo').attr('width', "100%");
$('#photo').attr('height', "100%");

/* $('#photo').attr('src', imagesData[currentPhoto].photo);
$("#photo-title").text(imagesData[currentPhoto].title);
$("#photo-description").text(imagesData[currentPhoto].description); */

loadPicture(currentPhoto);

$("#lb").on('click', function() {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPicture(currentPhoto);
});

$("#rb").on('click', function() {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPicture(currentPhoto);
});