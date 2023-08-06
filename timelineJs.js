const users = {
  user1: {
      userName: '@elonmusk',
      displayName: 'Elon Musk',
      joinedDate: 'June 2009',
      followingCount: 103,
      followerCount: 47900000,
      avatarURL: 'assets/elonmusk.jpg',
      coverPhotoURL: 'assets/elonmusk-cover.jpeg',
      tweets: [
          {
              text: 'I admit to judging books by their cover',
              timestamp: '2/10/2021 00:01:20'
          },
          {
              text: 'Starship to the moon',
              timestamp: '2/09/2021 18:37:12'
          },
          {
              text: 'Out on launch pad, engine swap underway',
              timestamp: '2/09/2021 12:11:51'
          }
      ]
  },
  user2: {
      userName: '@BillGates',
      displayName: 'Bill Gates',
      joinedDate: 'June 2009',
      followingCount: 274,
      followerCount: 53800000,
      avatarURL: 'assets/billgates.jpg',
      coverPhotoURL: 'assets/billgates-cover.jpeg',
      tweets: [
          {
              text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
              timestamp: '2/10/2021 00:01:20'
          },
          {
              text: 'Should I start tweeting memes? Let me know in a comment.',
              timestamp: '2/09/2021 18:37:12'
          },
          {
              text: 'In 2020, I read a book every hour.',
              timestamp: '2/09/2021 12:11:51'
          }
      ]
  }
};

function combineAndSortTweets() {
  let allTweets = [];
  for (const userKey in users) {
      const user = users[userKey];
      user.tweets.forEach((tweet) => {
          allTweets.push({ user: user.displayName, timestamp: new Date(tweet.timestamp), text: tweet.text });
      });
  }

  // Sort tweets by timestamp in descending order
  allTweets.sort((a, b) => b.timestamp - a.timestamp);

  return allTweets;
}

// Render the timeline
function renderTimeline() {
  const timelineContainer = document.getElementById("timeline-container");
  timelineContainer.innerHTML = ""; // Clear the current content

  const allTweets = combineAndSortTweets();
  allTweets.forEach((tweet) => {
      const timelineTweet = document.createElement("div");
      timelineTweet.classList.add("timeline-tweet");
      timelineTweet.innerHTML = `
          <div class="timeline-userInfo">
              <h4>${tweet.user}</h4>
              <p class="tweet-timestamp">${tweet.timestamp.toLocaleString()}</p>
          </div>
          <p class="timeline-tweet-content">${tweet.text}</p>
      `;
      timelineContainer.appendChild(timelineTweet);
  });
}

// Call the renderTimeline function to display the timeline on the page
renderTimeline();