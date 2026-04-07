    document.getElementById("grabBtn").addEventListener("click", () => {
      const url = document.getElementById("url").value.trim();
      const videoId = extractID(url);

      if (!videoId) {
        alert("Invalid YouTube URL");
        return;
      }

      showThumbs(videoId);
    });

    function extractID(url) {
      try {
        const u = new URL(url);

        if (u.hostname.includes("youtu.be")) {
          return u.pathname.slice(1);
        }

        if (u.searchParams.get("v")) {
          return u.searchParams.get("v");
        }

        return null;
      } catch {
        return null;
      }
    }

    function showThumbs(id) {
      const qualities = [
        "maxresdefault",
        /*"hqdefault",*/
        /*"mqdefault",*/
        /*"sddefault"*/
      ];

      let html = "";

      qualities.forEach(q => {
        const link = `https://img.youtube.com/vi/${id}/${q}.jpg`;

        html += `
          <div class="thumb">
            <p>${q}</p>
            <img src="${link}">
            <br>
            <a href="${link}" target="_blank" class="download-btn">Download</a>
          </div>
        `;
      });

      document.getElementById("result").innerHTML = html;
    }












    const randomVideos = [
"dQw4w9WgXcQ",
"8vHjNzcfV2M",
"JjO11LB1U48",
"z3xajbdNIb0",
"MGK7bDF9Uyw",
"yjZqZWRcP-c",
"jkoGm1t-kOA",
"x9utZs4aLrg",
"l9nh1l8ZIJQ",
"9bZkp7q19f0",
"3JZ_D3ELwOQ",
"e-ORhEE9VVg",
"RgKAFK5djSk",
"60ItHLz5WEA",
"fLexgOxsZu0",
"OPf0YbXqDm0",
"YQHsXMglC9A",
"09R8_2nJtjg",
"uelHwf8o7A",
"2Vv-BfVoq4g",
"hT_nvWreIhg",
"nYh-n7EOtMA",
"iS1g8G_njx8",
"YykjpeuMNEk",
"pRpeEdMmmQ0",
"VbfpW0pbvaU",
"lWA2pjMjpBs",
"09R8_2nJtjg",
"60ItHLz5WEA"
];

function loadBackground() {
const bg = document.getElementById("bg");
bg.innerHTML = "";

const cols = Math.ceil(window.innerWidth / 150);
const rows = Math.ceil(window.innerHeight / 150);

const total = cols * rows;

for (let i = 0; i < total; i++) {
const vid = randomVideos[Math.floor(Math.random() * randomVideos.length)];
const img = document.createElement("img");


img.src = `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
bg.appendChild(img);


}
}

loadBackground();
window.addEventListener("resize", loadBackground);



