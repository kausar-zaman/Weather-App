<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css"/>
    <link rel="stylesheet" href="./media-query.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap" rel="stylesheet">
    <title>Weather App</title>
</head>
<body>
   <div class="row">
       <div class="column">
        <div class="main-title">
            <h3>Weather App by Kausar Zaman</h3>
        </div>
        </div>
        <div class="column">
            <div class="timestamp">
                <div class="clock">
                    Current Time:
                    <span id="hr"></span>:
                    <span id="min"></span>:
                    <span id="sec"></span>
                </div>
            </div>
        </div>
        <script src="live-clock.js"></script>
    </div>
    <div class="app-wrap">
        <header>
        <div class="search">
            <input type="text" autocomplete="off" class="search-box" placeholder="Search for your city">
        </div>
        </header>
        <main>
            <div class="row">
                <div class="column">
                <section class="location">
                    <div class="city"></div>
                    <div class="date"></div>
                    <div class="icon"></div>
                </section>
            </div>
            <div class="column">
                <div class="current">
                    <div class="temp"><span></span></div>
                    <div class="weather"></div>
                    <div class="hi-low"></div>
                    <div class="sunrise_time"></div>
                    <div class="sunset_time"></div>
                </div>
            </div>
            </div>
        </main>
    </div> 
    <script src="app.js"></script>
</body>
</html>