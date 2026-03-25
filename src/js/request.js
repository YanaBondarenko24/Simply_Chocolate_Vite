
const key = "865a4b3e0caf1ca020a6248fbd90c8251478f40c5107409afda249b0789f6b2c";
const URL = "https://serpapi.com/search?engine=google";
const { getJson } = require("serpapi");
async function getVideo(){
getJson({
  q: "Tom Hanks",
  engine: "google_videos",
  device: "mobile",
  hl: "en",
  gl: "us",
  api_key: key
})
.then(({ videos_results })) => {
  console.log(videos_results);
}
    
    

}
getVideo();
