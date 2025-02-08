# Project Structure

/my-dog-finder
 ├── /app
 │   ├── /dogs
 │   │   ├── page.js  (Lists all dogs)
 │   │   ├── /[name]
 │   │   │   ├── page.js  (Dog details page)
 │   ├── /not-found
 │   │   ├── page.js  (Handles 404 redirects)
 │   ├── /components
 │   │   ├── DogCard.js (Single Dog Component)
 │   │   ├── DogList.js (List of Dogs)
 │   │   ├── Navbar.js (Navigation Bar)
 │   ├── layout.js  (Global Layout)
 │   ├── page.js (Redirects to /dogs)
 ├── /public
 │   ├── whiskey.jpg
 │   ├── duke.jpg
 │   ├── perry.jpg
 ├── next.config.js
