document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("posts-container");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        fetch("save_post.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            location.reload(); // Refresh to see new post
        })
        .catch(error => console.error("Error:", error));
    });
});

// Search and filter function
function filterPosts() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let posts = document.getElementsByClassName("post");

    Array.from(posts).forEach((post) => {
        post.style.display = post.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
}



