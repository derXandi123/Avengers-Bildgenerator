var meineLinks = [
    "https://i.pinimg.com/originals/78/ac/aa/78acaad3c2890c0d47f94ec7b3cce9fb.jpg",
    "https://www.film.tv/upload/bilder/filmshot_klein/2019/thor-hemsworth-1-thumb-960-retina.jpg",
    "https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers.jpg",
    "https://static.kino.de/wp-content/uploads/2015/11/Ruffalo-zu-Hulk-Film-Artikel-rct390x300u.jpg",
    "https://sm.ign.com/t/ign_de/screenshot/default/hawkeye-the-avengers-2012-movie-wallpaper-1920x10801_qbu7.1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrLUlD2LJ-QH0kRuVSYNlpx20__HxRp94rqQ&usqp=CAU",
  "https://aisvip-a.akamaihd.net/masters/1058175/2558x1439/avengers-endgame-diese-fragen-sind-noch-offen.jpg",
  "https://sites.google.com/site/theavengersfanpage123/_/rsrc/1361403265830/nick-fury-and-agent-coulson/the-avengers-wallpaper-nick-fury.jpg?height=223&width=400",
  "https://sm.ign.com/t/ign_de/screenshot/default/agentcoulson_sukn.1280.jpg",
 " https://media.playcentral.de/wp-content/uploads/2019/07/03134813/newspic-79448-652x367.jpg",
  "https://upload.wikimedia.org/wikipedia/de/3/3c/The_Avengers_2012_logo.jpg",
  "https://i.insider.com/51eeede8eab8ea6814000005?width=561&format=jpeg",
   "https://i3-img.prosieben.de/pis/ezone/8146qgELB38wdEB-ZftIYFPQSp-HxjRVj8ghGONpO6WKv5Pu4ggl9k5-tl1r2LQjsz9e89gKECWuYZT1XAFiJIxe4LyG9OZGAElcz5wJGQ/profile:mag-996x562",
    "https://de.web.img3.acsta.net/newsv7/19/05/21/10/08/0334971.jpg",
    "https://assets.cdn.moviepilot.de/files/05ebf5bf0073cef1111143f4e33b185c0f5009ddb77ebf6e1f554b47978e/fill/992/477/Marvels%20The%20Avengers.jpg",
    "https://api.time.com/wp-content/uploads/2019/02/iron-man-3-best-reviewed-marvel-movies.jpg",
    "https://assets.cdn.moviepilot.de/files/9164c9aa252bec90b2f104b8b1c501131afb56e57501915e87c4508b2a45/fill/1200/576/Thanos-Avengers-4-Endgame.jpg",
    "https://i.pinimg.com/originals/c9/20/e5/c920e5f047285364ada81ec627b447f4.jpg",
    "https://logos-world.net/wp-content/uploads/2020/05/Avengers-Age-of-Ultron-Logo-2015.jpg",
    "https://www.astropage.eu/wp-content/uploads/2016/10/news_1454.jpg",
    "https://static.toiimg.com/thumb/msid-75390440,imgsize-344550,width-800,height-600,resizemode-75/75390440.jpg",
   "https://i.insider.com/5e165b9349878c2236347b67?width=1136&format=jpeg",
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/11/1489667130-baby-groot-switches-guardians-of-the-galaxy-vol-2.jpg?crop=1.00xw:0.884xh;0,0&resize=1200:*"
  
];
 
function Bildgeneriren() {
  var index = Math.floor ( Math.random() * meineLinks.length );
  console.log( meineLinks[index] );
  document.getElementById("avengersBild").src = meineLinks[index];
}

