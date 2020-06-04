

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

function changeImage(v, f){
    console.log(f, v);
    var image = document.getElementById('image_to_edit');
    switch (f) {
        case "brightness":
            image.style.filter = "brightness("+ v +")";
            image.style.webkitFilter = "brightness("+ v +")";
            break;
        case "blur":
             image.style.filter = "blur("+v+"px)";
             image.style.webkitFilter = "blur("+v+"px)";
            break;
        case "contrast":
             image.style.filter = "contrast("+v+"%)";
             image.style.webkitFilter = "contrast("+v+"%)";
            break;
        case "grayscale":
             image.style.filter = "grayscale("+v+"%)";
             image.style.webkitFilter = "grayscale("+v+"%)";
            break;
        case "hue-rotate":
             image.style.filter = "hue-rotate("+v+"deg)";
             image.style.webkitFilter = "hue-rotate("+v+"deg)";
            break;
        case "invert":
             image.style.filter = "invert("+v+"%)";
             image.style.webkitFilter = "invert("+v+"%)";
            break;
        case "opacity" :
             image.style.filter = "opacity("+v+"%)";
             image.style.webkitFilter = "opacity("+v+"%)";
            break;
        case "saturate":
             image.style.filter = "saturate("+v+"%)";
             image.style.webkitFilter = "saturate("+v+"%)";
            break;
        case "sepia":
             image.style.filter = "sepia("+v+"%)";
             image.style.webkitFilter = "sepia("+v+"%)";
            break;
        default:
            image.style.filter ="none";
            image.style.webkitFilter ="none";
    }
}








$(function() {
    $("#image_to_edit").draggable();
});

var image = document.getElementById('image_to_edit');
var scale = 1;
// console.log($imageWidth);

$('#zoomin').click(function () {
    var newScale = scale + 0.02;
    image.style.transform = 'scale('+ newScale +')';
    scale = newScale;
});

$('#zoomout').click( function(){
    var newScale = scale - 0.02;
    image.style.transform = 'scale('+ newScale +')';
    scale = newScale;
});


function readURL(inputt) {
   var input =  $(inputt).parent().parent().parent().find('input');
   console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image_to_edit').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}



























