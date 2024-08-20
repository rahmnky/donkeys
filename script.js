// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getDatabase, ref, onValue, push, update, transaction } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Idn0hOJ62onR2BRyqDg2jKhcZpUA-kU",
    authDomain: "donkey-9f569.firebaseapp.com",
    projectId: "donkey-9f569",
    storageBucket: "donkey-9f569.appspot.com",
    messagingSenderId: "989629937582",
    appId: "1:989629937582:web:f4e1d018cdbf8aee587a3f",
    measurementId: "G-TMQY9XRG63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Vote Status Element
const voteStatus = document.getElementById('vote-status');

// Retrieve and display votes from Firebase
const votesRef = ref(database, 'votes');
onValue(votesRef, (snapshot) => {
    const votes = snapshot.val() || { hameed: 0, muntathar: 0 };
    voteStatus.innerHTML = `حميد بن عباس: ${votes.hameed} الأصوات<br>منتظر بن مبدر: ${votes.muntathar} الأصوات`;
});

// Voting functions
document.getElementById('vote-hameed').addEventListener('click', function() {
    const hameedVoteRef = ref(database, 'votes/hameed');
    transaction(hameedVoteRef, (currentVotes) => (currentVotes || 0) + 1);
});
document.getElementById('vote-muntathar').addEventListener('click', function() {
    const muntatharVoteRef = ref(database, 'votes/muntathar');
    transaction(muntatharVoteRef, (currentVotes) => (currentVotes || 0) + 1);
});

// Comments Section
const commentsContainer = document.getElementById('comments-container');
const commentInput = document.getElementById('comment-input');
const submitCommentButton = document.getElementById('submit-comment');

// Load comments from Firebase
const commentsRef = ref(database, 'comments');
onValue(commentsRef, (snapshot) => {
    commentsContainer.innerHTML = ''; // Clear existing comments
    snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        const commentElement = document.createElement('p');
        commentElement.textContent = comment.text;
        commentsContainer.appendChild(commentElement);
    });
});

// Submit a new comment
submitCommentButton.addEventListener('click', function() {
    const newComment = commentInput.value;
    if (newComment) {
        push(commentsRef, { text: newComment });
        commentInput.value = ''; // Clear the input
    }
});
