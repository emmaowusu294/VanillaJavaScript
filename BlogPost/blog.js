const postsContainer = document.getElementById("posts-container");

// ✅ Fetch all posts
async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to load posts!");
    const posts = await res.json();
    displayPosts(posts);
  } catch (err) {
    postsContainer.innerHTML = `<p>Error: ${err.message} 😢</p>`;
  }
}

// ✅ Display posts on the page
function displayPosts(posts) {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  const filteredPosts = userId
    ? posts.filter(post => post.userId == userId)
    : posts;

  postsContainer.innerHTML = filteredPosts
    .map(post => `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `)
    .join("");
}

fetchPosts();
