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
    <title>porfolio</title>
    {{--    <link rel="stylesheet" href="../../../Users/cas/websites/multiplayerportfolio/public/css/style.css">--}}
{{--    <link rel="icon" type="image/x-icon" href="../../../Users/cas/websites/multiplayerportfolio/public/images/img/dimond.png">--}}
    @vite(['resources/css/app.css', 'resources/js/app.css'])
</head>

<body class="bg-black m-0 p-0 min-h-screen min-w-screen overflow-hidden top-0 left-0 ">
<script>
    function startGame() {
        document.getElementById("startgame").classList.remove("zichtbaar");
        document.getElementById("startgame").classList.add("hidden");
    }
</script>

<div class="container flex justify-center items-center h-screen relative  " >

    <div id="startgame"  class="zichtbaar w-8/12  absolute bg-white flex flex-col items-center+ p-4" onclick="startGame()">

        <p >
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

{{--        <img src="{{public_path('img/start.png')}}" alt="start button">--}}
    </div>


    <div id="textdiv" class="hidden z-10 bg-white absolute top-1/3 left-1/3  h-max w-1/2 ">

        <h1 class="border-b-2 p-4 text-xl" id="dialogetitle"></h1>
        <p class="p-4" id="textdivtext"></p>
        <div id="github">
        </div>
        <button class="hover:bg-white border-0 cursor-pointer text-sm my-4 mx-2 ml-4 text-gray-400" id="nextdetails">next</button>
        <button class="hover:bg-whiteborder-0 cursor-pointer text-sm my-4 mx-2  text-red-400 "  id="close">close</button>
    </div>
    <canvas></canvas>
</div>


<script src="{{ asset('/js/index.js') }} " type="module"></script>
</body>

</html>
