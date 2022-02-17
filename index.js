 /* TASKS TO WORK ON
 
 1. Formatting the bottom half. Add description and title. Make the image area larger.
 2. Generate random algorithm the background image CSS. Or find an alternative method.
 3. Figure out a way to change the quote size and font.
 4. Configure and style the button.
 5. Make sure it looks good on a phone! (responsive design)
 6. Performance issues. Sometimes it's slow.

 */


function insertQuote() {
    url = "https://api.kanye.rest/";

    let results = "<br><br><br>\"";

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            quote = json.quote;
            results += quote;
            results += "\"";
            document.getElementById('quote').innerHTML = results;
        });
}

insertQuote();