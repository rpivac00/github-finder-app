/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/App.js",
    "./src/components/layout/Navbar.jsx",
    "./src/components/layout/Footer.jsx",
    "./src/pages/About.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/User.jsx",
    "./src/pages/NotFound.jsx",
    "./src/components/users/UserResults.jsx",
    "./src/components/users/UserItem.jsx",
    "./src/components/users/UserSearch.jsx",
    "./src/components/repos/RepoItem.jsx",
    "./src/components/repos/RepoList.jsx",
  ],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
