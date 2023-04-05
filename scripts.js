window.onload = () => {
    initScreen()
}
var total = 36;
function initScreen(){
    $("#form").on("submit", function(e) {
        e.preventDefault();
        var req = [];
        for (let i=1; i<=total; i++) {
            req.push( $(`input[name="type${i}"]:checked`).val());
        }
        console.log(req);
        // fetch('http://82e9-34-125-224-136.ngrok.io/predict', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(reqTest)
        // })
        // .then(response => response.json())
        // .then(response => console.log(JSON.stringify(response)))
        // $.post('http://6eb8-34-125-219-134.ngrok.io/predict', reqTest, (res) => {
        //     alert(res)
        // })
        // fetch('http://9de6-34-125-79-227.ngrok.io', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(reqTest)
        // }).then(response => {
        //     if (response.readyState == 4)
        //         if (response.status == 200)
        //             var json_data = response.responseText; 
        //     console.log(json_data)
        // })


        // $.ajax({
        //     url: 'http://58f1-35-233-207-164.ngrok.io/predict',
        //     type: "POST",
        //     headers: {
        //         'Content-Type':'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     dataType: "json",
        //     data: JSON.stringify(req),
        //     success: function (result) {
        //         alert(result)

        //     },
        //     error: function () {
        //         console.log("error");
        //     }
        // });

    })
    for (let i=1; i<=total; i++) {
        switch (i) {
            case 13:
                $("#grid").append(
                    `<div class="element element${i}">
                        <input type="radio" name="type${i}" value="l" required checked="true">
                        <label for="l">l</label>
                        <input type="radio" name="type${i}" value="g" required>
                        <label for="g">g</label>
                    </div>`
                );
                break;
            case 15:
                $("#grid").append(
                    `<div class="element element${i}">
                        <input type="radio" name="type${i}" value="n" required checked="true">
                        <label for="n">n</label>
                        <input type="radio" name="type${i}" value="w" required>
                        <label for="w">w</label>
                        <input type="radio" name="type${i}" value="b" required>
                        <label for="b">b</label>
                    </div>`
                );
                break;
            case 36:
                $("#grid").append(
                    `<div class="element element${i}">
                        <input type="radio" name="type${i}" value="t" required checked="true">
                        <label for="t">t</label>
                        <input type="radio" name="type${i}" value="n" required>
                        <label for="n">n</label>
                    </div>`
                );
                break;
            default:
                $("#grid").append(
                    `<div class="element element${i}">
                        <input type="radio" name="type${i}" value="f" required checked="true">
                        <label for="f">f</label>
                        <input type="radio" name="type${i}" value="t" required>
                        <label for="t">t</label>
                    </div>`
                );
        }
        if (i==total){
            $("#grid").append(
                `
                <button type="submit">Submit</button>
                `
            )
        }
    }
}