// Blogbuster — small enhancements for a static blog.
// No dependencies. Safe to delete: the page works without this file.

// The post index. Add an entry here when you add a post in posts/.
// (Rendering posts from Markdown files would need a server or a Markdown
// parser; for this starter, posts live as <article> blocks in index.html.)
const POSTS = [
  { slug: "hello-world", title: "Hello, World", date: "2026-11-09" },
  { slug: "second-post", title: "A Second Post", date: "2026-11-09" },
];

// Estimate reading time (~200 words per minute) for each article.
document.querySelectorAll("article").forEach((article) => {
  const words = article.textContent.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const label = article.querySelector(".reading-time");
  if (label) {
    label.textContent = minutes + " min read";
  }
});

// Dark-mode toggle, remembered in localStorage.
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  if (localStorage.getItem("blogbuster-theme") === "dark") {
    document.body.classList.add("dark");
  }
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "blogbuster-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

console.log("Blogbuster loaded — " + POSTS.length + " posts.");
