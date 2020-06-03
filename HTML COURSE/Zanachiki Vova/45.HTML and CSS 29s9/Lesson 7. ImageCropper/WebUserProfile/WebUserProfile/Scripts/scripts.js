$(function () {
    var $canvas = $("#canvas"),
        context = $canvas.get(0).getContext('2d');

    $("#crop").click(function () {
        var croppedImage = $canvas.cropper('getCroppedCanvas')
            .toDataURL('image/jpg');

        $("#result").html($('<img>').attr('src', croppedImage));

        console.log(croppedImage);
    });
    $("#aspectRatioChange").click(function () {
        //$('#canvas').cropper('setDragMode', 'move');

        var cropper = $('#canvas').cropper('destroy').cropper({
            aspectRatio: 1 / 1,
            viewMode: 1
        });
    });

    $('#saveServer').click(function () {
        var croppedImage = $canvas.cropper('getCroppedCanvas')
            .toDataURL('image/jpg');

        var data = { uploadImage: croppedImage };
        $.ajax({
            url: '/Home/SaveImageBase64',
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function (result) {

                $("#result").html($('<img>').attr('src','/UploadImages/'+result));
                alert(result);
            }
        });
    });

    $("#img_file").on('change', function () {
        if (this.files && this.files[0]) {
            if (this.files[0].type.match(/^image\//)) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();
                    img.onload = function () {
                        context.canvas.width = img.width;
                        context.canvas.height = img.height;
                        context.drawImage(img, 0, 0);

                        var cropper = $canvas.cropper('destroy').cropper({
                            aspectRatio: 16 / 9,
                            viewMode: 1
                        });
                    }
                    img.src = e.target.result;

                }
                reader.readAsDataURL(this.files[0]);
            }
            else {
                alert("Invalid file type");
            }
        }
        else {
            alert("Please select a file.");
        }
    });

 });