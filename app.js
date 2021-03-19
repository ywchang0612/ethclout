(function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Mar 21, 2021 00:00:00").getTime();

    var counter = function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("count-down").innerHTML =
            hours.toString().padStart(2, '0') + ":"
            + minutes.toString().padStart(2, '0') + ":"
            + seconds.toString().padStart(2, '0');

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("count-down").innerHTML = "00:00:00";
        }
    }
    // Update the count down every 1 second
    var x = setInterval(counter, 1000);

    counter();
})()
