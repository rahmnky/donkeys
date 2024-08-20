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
