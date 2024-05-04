// JavaScript code

// Function to handle clicks on the sidebar titles
function handleSidebarClick(event) {
    event.preventDefault();
    // Add your logic here for handling sidebar clicks
    console.log("Clicked on sidebar title:", event.target.textContent);
}

// Function to handle clicks on the video titles
function handleVideoClick(event) {
    event.preventDefault();
    // Add your logic here for handling video clicks
    console.log("Clicked on video title:", event.target.textContent);
}

// Function to fetch data from an API (example)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Add your logic here for handling the fetched data
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Add event listeners for sidebar titles
const sidebarTitles = document.querySelectorAll('.side-bar-titles');
sidebarTitles.forEach(title => {
    title.addEventListener('click', handleSidebarClick);
});

// Add event listeners for video titles
const videoTitles = document.querySelectorAll('.video-title');
videoTitles.forEach(title => {
    title.addEventListener('click', handleVideoClick);
});

// Example usage of fetchData function
fetchData('https://api.example.com/data');
