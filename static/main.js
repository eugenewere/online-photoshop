function readURL(input) {
    // var input =  $('#inpimg');
    // var input =  $(inputt).parent().parent().parent().find('input');

    if (input.files && input.files[0]) {
        console.log(input);
        var reader = new FileReader();
        console.log(reader);

        reader.onload = function (e) {
            console.log(e, e.target, e.target.result);
            $('#image_to_edit').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}





var timeout;
$('.custom-range').each(function () {


    var $indicator = $(this).parent().find('em');


    $(this).change(function () {
       $indicator.text(this.value);
    });
    $(this).mousedown( function () {
        $(this).mousemove( function(){
            var valu = this.value;
            var filter = this.dataset.filter;
            $indicator.text(this.value);
            $(this).parent().siblings().css('visibility', 'hidden');
            changeImage(valu, filter);
        });
    });
    $(this).mouseup( function(){
        $(this).mousemove( function() {
            $(this).parent().siblings().css('visibility', 'visible');
        });
    });

});
$('.custom-range').mouseup( function(){
    $('#tt').mousemove( function() {
        $('.custom-range').css('visibility', 'visible');
    });
});
let star = {
    blur: "",
    brightness: "",
    contrast: "",
    grayscale: "",
    hue: "",
    invert: "",
    opacity: "",
    saturate: "",
    sepia: "",
};
let allStyles = function () {
    return `${star.blur} ${star.brightness} ${star.contrast} ${star.grayscale} ${star.hue} ${star.invert} ${star.opacity} ${star.saturate} ${star.sepia}`;
};
function showFilter() {
    var design = allStyles();
    $('#image_to_edit').css("filter", design);


}

function changeImage(v, f){
    // console.log(f, v);
    var image = document.getElementById('image_to_edit');
    switch (f) {
        case "brightness":
            star.brightness="brightness("+ v +")";
            // image.style.filter = "brightness("+ v +")";
            // image.style.webkitFilter = "brightness("+ v +")";
            break;
        case "blur":
             star.blur="blur("+v+"px)";
             // image.style.filter = "blur("+v+"px)";
             // image.style.webkitFilter = "blur("+v+"px)";
            break;
        case "contrast":
             star.contrast = "contrast("+v+"%)";
             // image.style.filter = "contrast("+v+"%)";
             // image.style.webkitFilter = "contrast("+v+"%)";
            break;
        case "grayscale":
             star.grayscale = "grayscale("+v+"%)";
             // image.style.filter = "grayscale("+v+"%)";
             // image.style.webkitFilter = "grayscale("+v+"%)";
            break;
        case "hue-rotate":
             star.hue = "hue-rotate("+v+"deg)";
             // image.style.filter = "hue-rotate("+v+"deg)";
             // image.style.webkitFilter = "hue-rotate("+v+"deg)";
            break;
        case "invert":
            star.invert = "invert("+v+"%)";
             // image.style.filter = "invert("+v+"%)";
             // image.style.webkitFilter = "invert("+v+"%)";
            break;
        case "opacity" :
            star.opacity = "opacity("+v+"%)";
             // image.style.filter = "opacity("+v+"%)";
             // image.style.webkitFilter = "opacity("+v+"%)";
            break;
        case "saturate":
            star.saturate = "saturate("+v+"%)";
             // image.style.filter = "saturate("+v+"%)";
             // image.style.webkitFilter = "saturate("+v+"%)";
            break;
        case "sepia":
             star.sepia = "sepia("+v+"%)";
             // image.style.filter = "sepia("+v+"%)";
             // image.style.webkitFilter = "sepia("+v+"%)";
            break;
        default:
            image.style.filter ="none";
            image.style.webkitFilter ="none";
    }
    showFilter();
}










var image = document.getElementById('image_to_edit');
var scale = 1;
// console.log($imageWidth);

$('#zoomin').click(function () {
    $(this).mousedown(function () {
        var newScale = scale + 0.02;
        image.style.transform = 'scale('+ newScale +')';
        scale = newScale;
    });
});

$('#zoomout').click(function(){

    $(this).mousedown(function () {
        var newScale = scale - 0.02;
        image.style.transform = 'scale(' + newScale + ')';
        scale = newScale;
    });
});


$(".img-fluid").click(function () {
   $(this).each(function () {
       var src = $(this).attr('src');
       $('#exampleModal').modal('hide');
       setTimeout( $("#image_to_edit").attr('src', src).fadeIn(),2000)


   });
});

$("#image_to_edit").draggable();


$('.cradio').each(function (e) {
   $(this).change(function (e) {
       var value = $(this).val();
       console.log(value);
       $("#image_to_edit").css('image-rendering', value);
   })
});

function generatePDF() {
    var fullPath = document.getElementById("image_to_edit").src;

    var filename = fullPath.replace(/^.*[\\\/]/, '');
    const element =document.getElementById('img-wr');
    console.log(filename.split('.')[0]);
    var opt = {
        margin:       0.12,
        filename:     filename.split('.')[0] + '.jpg',
        image:        { type: 'jpg'},
        html2canvas:  { scale: 1,  },
        // jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf()
        .from(element)
        .set(opt)
        .save();


}
// function downloadCanvas(link, canvasId, filename) {
//     link.href = document.getElementById('image_to_edit').toDataURL();
//     link.download = filename;
// }
//
//
// document.getElementById('savebtn').addEventListener('click', function() {
//     var fullPath = document.getElementById("image_to_edit").src;
//     // var fullPath2 = document.getElementById("");
//     var filename = fullPath.replace(/^.*[\\\/]/, '');
//     downloadCanvas(this, 'image_to_edit', filename);
// }, false);

// $('#savebtn').click(function () {
//     var fullPath = document.getElementById("image_to_edit").src;
//     $(this).attr('download', fullPath);
//     $(this).attr('href', fullPath);
// }).trigger('click');

var rotate = 0;
$('#rotateImg').click(function () {
    var new_rotate = rotate + 90;
    rotate=new_rotate;
    if (new_rotate === 360){
        rotate = 0;
        new_rotate = 0;
        $('#image_to_edit').css('transition', 'none');
        $('#image_to_edit').css('transform', 'rotate('+ rotate + 'deg)');
        $('#image_to_edit').css('transform', ' ');
    }
    else {
        console.log(new_rotate);
        $('#image_to_edit').css('transition', '1s');
        $('#image_to_edit').css('transform', 'rotate('+ rotate + 'deg)');
    }

});















