function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

/**
 * ! step
 * get the container element where you want to add new element
 * create child element
 * set innerHTML or innerTEXT
 * appendChild
 */

function displayPost(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
      const PostDiv = document.createElement("div");
      PostDiv.classList.add('post')
      PostDiv.innerHTML = `
      <h4>user- ${post.userId}</h4>
      <h5>post-title: ${post.title}</h5>
      <p>post-description: ${post.body}</p>
      `;
      postsContainer.appendChild(PostDiv);
  }
}

loadPost();
