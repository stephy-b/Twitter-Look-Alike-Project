var user1 = {
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
};

var user2 = {
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
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let header = document.getElementById("header-container");
        header.innerHTML = `
            <button class="backBtn">🡐</button>
            <div class="userDisplayInfo">
                <h1 class="displayName">${user1.displayName}</h1>
                <h4 class="numOfTweets">${user1.tweets.length} tweets</h4>
            </div>
            `
        let coverPhoto = document.getElementById("cover-photo-container");
        coverPhoto.innerHTML = `
            <img src="${user1.coverPhotoURL}" id="coverPhotoImg" alt="cover photo">
        `
        
        let profileDetails = document.getElementById("profile-details");
        profileDetails.innerHTML = `
            <img src="${user1.avatarURL}" class="userAvatar" alt="user avatar image">
            <div class="currentUserInfo">
            <h2 class="displayName">${user1.displayName}</h2>
            <h4 class="userName">${user1.userName}</h4>
            </div>
            <h4 class="joinedDate">Joined ${user1.joinedDate}</h4>
            <div class="follow-container">
            <h4>${user1.followingCount} Following</h4>
            <h4>${user1.followerCount.toLocaleString()} Followers</h4>
            </div>
            <div class="follow-btn-container">
            <button class="follow-btn">Follow</button>
            </div>
            `
            
        const allTweets = document.getElementById("tweets-container");
        allTweets.classList.add("tweets-container");
        
        for (let i = 0; i <= user1.tweets.length - 1; i++) {
            const tweets = document.createElement("div");
            tweets.classList.add("tweets");
            tweets.innerHTML = `
                <div class="pic-container">
                    <img src="${user1.avatarURL}" class="profile-pic-sm" alt="Profile Pic">
                </div>
                <h4 class="tweet-displayname">${user1.displayName}</h4>
                <p class="tweet-username">${user1.userName}</p>
                <p class="tweet-timestamp">${user1.tweets[i].timestamp}</p>
                <p class="tweet-content">${user1.tweets[i].text}</p>
            `;
            allTweets.appendChild(tweets);
        };

        // Combine user objects into a larger object "users"
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
        // Function to parse the query string and extract the value of a specific parameter
        function getQueryParam(param) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(param);
        };
        // Get the user value from the query string
        const userQueryParam = getQueryParam("user");
        // Get the current user based on the query parameter
        const currentUser = users[userQueryParam];

        if (currentUser) {
            // Clear the tweets container before adding new tweets
            const allOldTweets = document.getElementById("tweets-container");
            allOldTweets.innerHTML = ""; // Clear the current content
            // Render the header
            const header = document.getElementById("header-container");
            header.innerHTML = `
                <button class="backBtn">🡐</button>
                <div class="userDisplayInfo">
                    <h1 class="displayName">${currentUser.displayName}</h1>
                    <h4 class="numOfTweets">${currentUser.tweets.length} tweets</h4>
                </div>
            `;
        
            // Render the cover photo
            const coverPhoto = document.getElementById("cover-photo-container");
            coverPhoto.innerHTML = `
                <img src="${currentUser.coverPhotoURL}" class="coverPhotoImg" alt="cover photo">
            `;
        
            // Render the profile details
            const profileDetails = document.getElementById("profile-details");
            profileDetails.innerHTML = `
                <img src="${currentUser.avatarURL}" class="userAvatar" alt="user avatar image">
                <div class="currentUserInfo">
                    <h2 class="displayName">${currentUser.displayName}</h2>
                    <h4 class="userName">${currentUser.userName}</h4>
                </div>
                <h4 class="joinedDate">Joined ${currentUser.joinedDate}</h4>
                <div class="follow-container">
                    <h4>${currentUser.followingCount} Following</h4>
                    <h4>${currentUser.followerCount.toLocaleString()} Followers</h4>
                </div>
                <div class="follow-btn-container">
                    <button class="follow-btn">Follow</button>
                </div>
            `;
        
            // Render the tweets
            const allTweets = document.getElementById("tweets-container");
            allTweets.classList.add("tweets-container");
        
            for (let i = 0; i < currentUser.tweets.length; i++) {
                const tweet = currentUser.tweets[i];
                const tweets = document.createElement("div");
                tweets.classList.add("tweets");
                tweets.innerHTML = `
                    <div class="pic-container">
                        <img src="${currentUser.avatarURL}" class="profile-pic-sm" alt="Profile Pic">
                    </div>
                    <h4 class="tweet-displayname">${currentUser.displayName}</h4>
                    <p class="tweet-username">${currentUser.userName}</p>
                    <p class="tweet-timestamp">${tweet.timestamp}</p>
                    <p class="tweet-content">${tweet.text}</p>
                `;
                allTweets.appendChild(tweets);
            }
        } else {
            // Handle the case when the user query parameter is invalid or missing
            console.error("Invalid user parameter.");
        };   
    };
};
xhttp.open("GET", "index.js", true);
xhttp.send();
