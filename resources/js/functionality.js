//variables que cambian la foto de muestra de personaje al presionar el icono de cada uno
//por default se comienza con tracer, pero la variable de hero picture se sobre escribe
//por una nueva dependiendo el caso

let profileHeroTracer =
  "https://static.playoverwatch.com/media/wallpaper/tracer-wallpaper-wide.jpg";

let profileHeroDva =
  "https://static.playoverwatch.com/media/wallpaper/dva-wallpaper-wide.jpg";

let profileHeroMercy =
  "https://static.playoverwatch.com/media/wallpaper/mercy-theatrical-wide.jpg";
let profileHeroHog =
  "https://static.playoverwatch.com/media/wallpaper/halloween-terror-wide.jpg";
let profileHeroSoldier =
  "https://static.playoverwatch.com/media/wallpaper/soldier-wallpaper-wide.jpg";
let profileHeroGenji =
  "https://static.playoverwatch.com/media/wallpaper/genji-theatrical-wide.jpg";

let profileTeamShanghai =
  "https://bnetcmsus-a.akamaihd.net/cms/blog_header/4x/4XOIT26EFOEN1515105939402.jpg";
let profileTeamFuel =
  "https://bnetcmsus-a.akamaihd.net/cms/blog_header/zo/ZOQ4XAHSF4CN1510703544602.JPG";
let profileTeamOutlaws =
  "https://bnetcmsus-a.akamaihd.net/cms/page_media/qp/QPGMG8PAK82T1513307261784.jpg";
let profileTeamFili =
  "https://bnetcmsus-a.akamaihd.net/cms/blog_header/ie/IEJFIHXR2DS21517430855082.png";
let profileTeamSeoul =
  "https://bnetcmsus-a.akamaihd.net/cms/blog_header/p6/P6U0KR4G9DFE1509816687002.jpg";

let DescriptionTracer =
  "Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to 'blink' through space and rewind her personal timeline as she battles to right wrongs the world over.";
let DescriptionDva =
  "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.";

let DescriptionMercy =
  "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.";
let DescriptionSoldier =
  "Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.";
let DescriptionHog =
  "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.";
let DescriptionGenji =
  "Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.";

let TeamScoreShanghai = "SHANGHAI DRAGONS RECORD 43W-42L";
let TeamScoreFuel = "DALLAS FUEL RECORD 37W-47L";
let TeamScoreOutlaws = "HUSTON OUTLAWS RECORD 36W-50L";
let TeamScoreFili = " FILAFELFIA FUSION RECORD 42W-43L";
let TeamScoreSeoul = "DALLAS FUEL RECORD 51W-34L";

// selector para el evento de presionar las imagenes de los thumbnails
document
  .querySelector(".thumbnails")
  .addEventListener("click", function(event) {
    console.log("gerer");
    heroSelector(event.target.className);
  });

// selector para el evento de presionar las imagenes de los thumbnails de los equipos de OWL
document
  .querySelector(".thumbnails-team")
  .addEventListener("click", function(event) {
    teamSelector(event.target.className);
  });
// selector para el input de dropdown que muestra el cambio de opciones
document
  .querySelector(".maps-input")
  .addEventListener("change", function(event) {
    mapSelector(event.target.value);
  });

// funcion para cambiar la imagen del mapa cuando la opcion del dropdown se cambia a cualquiera de las 3 opciones
function mapSelector(mapType) {
  switch (mapType.toLowerCase()) {
    case "assault":
      document.querySelector(".map-image").src =
        "https://static.playoverwatch.com/img/pages/maps/images/hanamura.jpg";
      document.querySelector(".map-description").innerText = "HANAMURA-JAPAN";
      break;

    case "control":
      document.querySelector(".map-image").src =
        "https://static.playoverwatch.com/img/pages/maps/images/ilios.jpg";
      document.querySelector(".map-description").innerText = "ILLIOS-GRECEE";
      break;

    case "escort":
      document.querySelector(".map-image").src =
        "https://static.playoverwatch.com/img/pages/maps/images/dorado.jpg";
      document.querySelector(".map-description").innerText = "DORADO-MEXICO";

      break;
  }
}

// funcion para cambiar imagen y texto de la descripcion del equipo de OWL
function teamSelector(teamName) {
  switch (teamName) {
    case "shanghai":
      document.querySelector(".team-logo").src = profileTeamShanghai;
      document.querySelector(".team-score").innerText = TeamScoreShanghai;
      break;

    case "fuel":
      document.querySelector(".team-logo").src = profileTeamFuel;
      document.querySelector(".team-score").innerText = TeamScoreFuel;
      break;
    case "fili":
      document.querySelector(".team-logo").src = profileTeamFili;
      document.querySelector(".team-score").innerText = TeamScoreFili;
      break;
    case "outlaws":
      document.querySelector(".team-logo").src = profileTeamOutlaws;
      document.querySelector(".team-score").innerText = TeamScoreOutlaws;
      break;
    case "seoul":
      document.querySelector(".team-logo").src = profileTeamSeoul;
      document.querySelector(".team-score").innerText = TeamScoreSeoul;
      break;
  }
}

// funcion para cambiar imagen y texto de la descripcion del heroe cuando se presiona la imagen del thumbnail
function heroSelector(heroName) {
  switch (heroName) {
    case "tracer":
      document.querySelector(".hero-picture").src = profileHeroTracer;
      document.querySelector(".hero-description").innerText = DescriptionTracer;
      break;

    case "Dva":
      document.querySelector(".hero-picture").src = profileHeroDva;
      document.querySelector(".hero-description").innerText = DescriptionDva;
      break;

    case "mercy":
      document.querySelector(".hero-picture").src = profileHeroMercy;
      document.querySelector(".hero-description").innerText = DescriptionMercy;
      break;

    case "hog":
      document.querySelector(".hero-picture").src = profileHeroHog;
      document.querySelector(".hero-description").innerText = DescriptionHog;
      break;

    case "soldier":
      document.querySelector(".hero-picture").src = profileHeroSoldier;
      document.querySelector(
        ".hero-description"
      ).innerText = DescriptionSoldier;
      break;

    case "genji":
      document.querySelector(".hero-picture").src = profileHeroGenji;
      document.querySelector(".hero-description").innerText = DescriptionGenji;
      break;
  }
}
