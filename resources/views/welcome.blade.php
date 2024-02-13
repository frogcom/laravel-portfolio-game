<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
{{--    <link rel="stylesheet" href="../../../Users/cas/websites/multiplayerportfolio/public/css/style.css">--}}
{{--    <link rel="icon" type="image/x-icon" href="../../../Users/cas/websites/multiplayerportfolio/public/images/img/dimond.png">--}}
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>

</head>

<body>
<script>
    $(window).on('load', function () {
        // Animate loader off screen
        setTimeout(function () {
            $("#DatForenklaR1_Loader_Container").addClass("DatForenklaR1_Loader_Out");
            $("body").removeClass("DatForenklaR1_Disable_Scroll");
            setTimeout(function () {
                // lottie.pause();
            }, 1500);
        }, 1500);
    });
    function startGame() {
        document.getElementById("startgame").classList.remove("zichtbaar");
        document.getElementById("startgame").classList.add("hidden");
    }



</script>

<div class="container" style="display: flex; position: relative; width: 100vw; height: 100vh;">

    <div id="DatForenklaR1_Loader_Container">
        <!-- De content van de Loader, hier kan een gifje of een Lottie Animatie geplaatst worden -->
        <div id="DatForenklaR1_Loader_Content">
            <div id="loading">
                <p>Loading portfolio<b>.</b><b>.</b><b>.</b></p>
            </div>
        </div>
    </div>
    <div id="startgame" class="zichtbaar" onclick="startGame()">

        <p>
            Welkom bij mijn portfolio game! Hier kun je meer te weten komen over mijn vaardigheden, projecten en
            meer.
            Wanneer je door me website loopt kom je meerdere huizen tegen. met verschillende kleuren daken elk dak
            heeft een andere betekenis.
            blauw staat voor persoonlijke informatie, groen staat voor mijn skills en doellen. en rood voor mijn
            projecten die ik extra wil uitlichten.

        </p>

        <p>
            je snel naar mijn Github wilt gaan, kun je klikken op deze link: <a href="github.com/frogycom"></a>.
            Hier vind je mijn
            code, van een hoop projecten waar ik aan gewerkt heb</p>

        <p>
            Ik hoop dat je geniet van het verkennen van mijn portfolio game en als je vragen hebt, voel je vrij om
            contact met me op
            te nemen!
        </p>

        <p>klik hier om de game te starten</p>

        <img src="{{public_path('img/start.png')}}" alt="start button">
    </div>
    <div id="textdiv" class="hidden">
        <h1 id="dialogetitle"></h1>
        <p id="textdivtext"></p>
        <div id="github">
        </div>
        <button id="nextdetails">next</button>
        <button id="close">close</button>
    </div>
    <canvas></canvas>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"
        integrity="sha512-6+YN/9o9BWrk6wSfGxQGpt3EUK6XeHi6yeHV+TYD2GR0Sj/cggRpXr1BrAQf0as6XslxomMUxXp2vIl+fv0QRA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- <script src="loader.js"></script> -->

<script src="{{ asset('/js/index.js') }} " type="module"></script>

{{public_path('img/oldMan/Idle.png')}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/js/keys.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/js/functions.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/data/audio.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/data/collisions.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/data/characters.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/assets/js/utils.js"></script>--}}
{{--<script src="../../../Users/cas/websites/multiplayerportfolio/public/classes.js"></script>--}}
{{--<script src="index.js"></script>--}}

{{--<script src="{{ asset('/js/keys.js') }} " type="module"></script>--}}
{{--<script src="{{ asset('/js/functions.js') }} " type="module"></script>--}}

{{--<script src="{{asset('/js/data/audio.js')}}" type="module"></script>--}}
{{--<script src="{{asset('/js/data/collisions.js')}}"></script>--}}
{{--<script src="{{ asset('/js/utils.js') }} " type="module"></script>--}}
{{--<script src="{{ asset('/js/classes.js') }} " type="module"></script>--}}

</body>

</html>
