const imageUrls = [
 "https://c4.wallpaperflare.com/wallpaper/1/398/339/elden-ring-landscape-game-art-video-game-art-video-games-hd-wallpaper-thumb.jpg",
"https://images.steamusercontent.com/ugc/2058741034012525685/D0FBE13833A04573BA78B1584C510EFC5CED0DEF/",
"https://preview.redd.it/elden-ring-nightreign-4k-key-art-without-logo-wallpaper-v0-iba4lotwcj6e1.jpeg?auto=webp&s=fc61901704e8447d8ae641d3ecef213066c9656e",
"https://i.ytimg.com/vi/mFRSRzO-96U/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYyhFMA8=&rs=AOn4CLA5rbTNZtoQzamWoxXuNywcD0qLEw",
"https://c4.wallpaperflare.com/wallpaper/265/526/346/helldivers-2-fan-art-robot-space-battle-video-games-hd-wallpaper-preview.jpg",
"https://c4.wallpaperflare.com/wallpaper/265/526/346/helldivers-2-fan-art-robot-space-battle-video-games-hd-wallpaper-preview.jpg",
"https://images.steamusercontent.com/ugc/31065513940009497/A521175756DC885347DE142230F51333D65917DC/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_helldivers_2_06_2560x1080.jpg&height=506&sharpen",
"https://images.alphacoders.com/868/868407.jpg",
"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2021/5/14/zaddqxu6k5y3jd3liobj/midgard-lake-of-nine-temple-god-of-war",
"https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_god_of_war_ragnarok_05_2560x1080.jpg&height=506&sharpen",
"https://images8.alphacoders.com/130/1300934.jpg",
"https://images3.alphacoders.com/129/1296116.jpg"
];




const track = document.querySelector('.carousel-track');
imageUrls.forEach((url, i) => {
  const img = document.createElement('img');
  img.src = url;
  if (i === 0) img.classList.add('active');
  track.appendChild(img);
});

const imgs = Array.from(document.querySelectorAll('.carousel-track img'));
let currentIndex = 0;

function showImage() {
  imgs.forEach((img, idx) =>
    img.classList.toggle('active', idx === currentIndex)
  );
}

document.getElementById("prev").onclick = () => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImage();
};
document.getElementById("next").onclick = () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage();
};


let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage();
}, 4000);

const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseover", () => clearInterval(autoSlide));
carousel.addEventListener("mouseout", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % imgs.length;
    showImage();
  }, 4000);
});


const jokeText = document.getElementById("jokeText");
const jokeBtn = document.getElementById("jokeBtn");
const spinner = document.getElementById("spinner");

jokeBtn.addEventListener("click", async () => {
  jokeText.textContent = "";
  spinner.style.display = "inline-block";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await response.json();
    const joke = data.joke || "Couldn't fetch a joke. Try again!";
    spinner.style.display = "none";

   
    let i = 0;
    jokeText.textContent = "";
    function typeEffect() {
      if (i < joke.length) {
        jokeText.textContent += joke.charAt(i);
        i++;
        setTimeout(typeEffect, 30);
      }
    }
    typeEffect();
  } catch (error) {
    spinner.style.display = "none";
    jokeText.textContent = "Failed to fetch joke. Please try again.";
    console.error(error);
  }
});
