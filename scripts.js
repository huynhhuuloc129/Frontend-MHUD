window.onload = () => {
    initScreen()
}
var total = 36;
function initScreen(){
    $("#form").on("submit", function(e) {
        e.preventDefault();
        var req = [];
        var reqTest = {
            "x_test": ["f","f","f","f","f","f","f","f","t","f","f","f","g","f","n","f","f","t","f","f","f","t","t","f","f","f","f","f","f","f","f","f","f","t","t","t"]
        }
        for (let i=1; i<=total; i++) {
            req.push( $(`input[name="type${i}"]:checked`).val());
        }
        $.ajax({
            url: 'http://efc6-35-222-152-13.ngrok.io/predict',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': '*'
            },
            type: "POST",
            crossDomain: true,
            dataType: "json",
            data: {
                reqTest
            },
            success: function (result) {
                alert(result)

            },
            error: function () {
                console.log("error");
            }
        });

    })
    for (let i=1; i<=total; i++) {
        $("#grid").append(
            `<div class="element element${i}">
                <input type="radio" name="type${i}" value="f">
                <label for="f">f</label>
                <input type="radio" name="type${i}" value="l">
                <label for="l">l</label>
                <input type="radio" name="type${i}" value="t">
                <label for="t">t</label><br>
                <input type="radio" name="type${i}" value="n">
                <label for="n">n</label>
                <input type="radio" name="type${i}" value="w">
                <label for="w">w</label>
                <input type="radio" name="type${i}" value="g">
                <label for="g">g</label><br>
            </div>`
        );
        if (i==total){
            $("#grid").append(
                `
                <button type="submit">Submit</button>
                `
            )
        }
    }
}