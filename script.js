// Handles showing the right panel when a button is clicked
function showPanel(panelId) {
  let panels = document.getElementsByClassName("content-panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
  document.getElementById(panelId).style.display = "block";
}

// Set up button listeners
document.getElementById("home-button").addEventListener("click", function () {
  showPanel("profile");
});

document
  .getElementById("explore-button")
  .addEventListener("click", function () {
    showPanel("tweet-feed");
  });

document
  .getElementById("notifications-button")
  .addEventListener("click", function () {
    showPanel("tweet-feed");
  });

document
  .getElementById("messages-button")
  .addEventListener("click", function () {
    showPanel("tweet-feed");
  });

document.getElementById("tweet-button").addEventListener("click", function () {
  let tweetText = document.getElementById("tweet-text").value;
  let tweetsContainer = document.getElementById("tweets-container");

  if (tweetText.length > 0) {
    let newTweet = document.createElement("div");
    newTweet.className = "tweet";

    let p = document.createElement("p");
    p.textContent = tweetText;

    let time = document.createElement("time");
    let now = new Date();
    time.textContent = now.toLocaleString();

    newTweet.appendChild(p);
    newTweet.appendChild(time);

    tweetsContainer.prepend(newTweet);
    document.getElementById("tweet-text").value = "";
  } else {
    alert("Please enter a tweet.");
  }
});
