document.addEventListener('DOMContentLoaded', function() {
    const voteHameedButton = document.getElementById('vote-hameed');
    const voteMuntatharButton = document.getElementById('vote-muntathar');
    const voteStatus = document.getElementById('vote-status');

    // Initialize votes from localStorage or default to zero
    const votes = JSON.parse(localStorage.getItem('votes')) || { hameed: 0, muntathar: 0 };

    // Function to update the vote display
    function updateVoteDisplay() {
        voteStatus.innerHTML = `حميد بن عباس: ${votes.hameed} الأصوات<br>منتظر بن مبدر: ${votes.muntathar} الأصوات`;
    }

    // Function to handle voting and update localStorage
    function handleVote(candidate) {
        votes[candidate]++;
        localStorage.setItem('votes', JSON.stringify(votes));
        updateVoteDisplay();
    }

    // Set up event listeners for vote buttons
    voteHameedButton.addEventListener('click', function() {
        handleVote('hameed');
    });

    voteMuntatharButton.addEventListener('click', function() {
        handleVote('muntathar');
    });

    // Initial display of votes
    updateVoteDisplay();
});
.comments-section {
    margin: 2em 0;
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ddd;
    border-radius: 5px;
}

#comment-input {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#comments-container p {
    background-color: #f9f9f9;
    padding: 0.5em;
    border-radius: 5px;
    margin-bottom: 0.5em;
}
