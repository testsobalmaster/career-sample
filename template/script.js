// Handles showing the right panel when a button is clicked
function showPanel(panelId) {
  const panels = document.getElementsByClassName("content-panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
  document.getElementById(panelId).style.display = "block";
}

document.getElementById("profile-button").addEventListener("click", () => {
  showPanel("profile");
});

document
  .getElementById("home-button")
  .addEventListener("click", () => {
    showPanel("tweet-feed");
  });

document
  .getElementById("explore-button")
  .addEventListener("click", () => {
    showPanel("tweet-feed");
  });

document
  .getElementById("notifications-button")
  .addEventListener("click", () => {
    showPanel("tweet-feed");
  });

document
  .getElementById("messages-button")
  .addEventListener("click", () => {
    showPanel("tweet-feed");
  });

document.getElementById("tweet-button").addEventListener("click", () => {
  const tweetText = document.getElementById("tweet-text").value;
  const tweetsContainer = document.getElementById("tweets-container");


  const newTweet = document.createElement("div");
  newTweet.className = "tweet";

  const p = document.createElement("p");
  p.textContent = tweetText;

  const time = document.createElement("time");
  const now = new Date();
  time.textContent = now.toLocaleString();

  newTweet.appendChild(p);
  newTweet.appendChild(time);

  tweetsContainer.prepend(newTweet);
  document.getElementById("tweet-text").value = "";
});
