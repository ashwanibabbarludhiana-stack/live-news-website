# Live News Website 🔴

A modern, responsive live news website built with HTML, CSS, and JavaScript. Get breaking news and updates in real-time with a sleek user interface.

## Features ✨

- **Live News Feed**: Real-time breaking news updates with live ticker
- **Category Filtering**: Browse news by categories (Politics, Business, Technology, Sports, Entertainment, Health)
- **Search Functionality**: Search news articles by keywords
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Featured News**: Highlighted featured articles section
- **Article Details**: Modal view for full article content
- **Modern UI**: Beautiful gradient headers, smooth animations, and intuitive navigation
- **Social Media Integration**: Quick links to social media profiles

## Project Structure 📁

```
live-news-website/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Technologies Used 🛠️

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6)**: Interactive features and dynamic content
- **Font Awesome**: Icon library for beautiful icons
- **Unsplash API**: Sample images for news articles

## Getting Started 🚀

### Option 1: Direct File Access
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start browsing the latest news!

### Option 2: Live on GitHub Pages
The website is deployed and live at:
```
https://ashwanibabbarludhiana-stack.github.io/live-news-website
```

## Features Breakdown 📰

### 1. Live Ticker
- Displays breaking news in a scrolling ticker at the top
- Updates automatically every 5 seconds
- Easy to spot with the red "LIVE" badge

### 2. Navigation Categories
- Browse news by different categories
- Active category is highlighted with red underline
- Instant filtering of news articles

### 3. Featured Section
- Highlights the most important news stories
- Displayed prominently at the top
- Larger cards for better visibility

### 4. News Grid
- Responsive grid layout that adapts to screen size
- Click any article to read full details in a modal
- Shows category, title, description, source, and time

### 5. Search Bar
- Search articles by title, description, or content
- Search by pressing Enter or clicking the search button
- Real-time filtering of results

### 6. Dark Mode
- Toggle between light and dark themes
- Preference saved in browser's localStorage
- Easy on the eyes during night reading

### 7. Responsive Design
- Works perfectly on all device sizes
- Mobile-first approach
- Touch-friendly interface

## How to Use 💻

1. **Browse News**: Scroll through the latest news articles on the homepage
2. **Filter by Category**: Click on category links in the navigation bar
3. **Search**: Use the search bar to find specific news articles
4. **Read Full Article**: Click on any news card to read the complete article
5. **Toggle Dark Mode**: Click the moon/sun icon in the header
6. **Load More**: Click "Load More News" to see additional articles

## Customization 🎨

### Add Your News Data
Edit the `newsData` array in `script.js` to add your own news articles:

```javascript
const newsData = [
    {
        id: 1,
        title: "Your News Title",
        description: "Brief description here",
        category: "technology",
        image: "https://image-url.com/image.jpg",
        content: "Full article content here",
        author: "Source Name",
        time: "2 hours ago",
        featured: true
    },
    // Add more articles...
];
```

### Change Colors
Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #e74c3c;      /* Main red color */
    --secondary-color: #2c3e50;    /* Dark blue */
    --text-color: #333;            /* Text color */
    --bg-color: #f5f5f5;           /* Background */
}
```

## API Integration 🔗

To use real news data, integrate with a news API:

### Recommended APIs:
- **NewsAPI.org** - Free news API with multiple sources
- **MediaStack** - Real-time news data
- **New York Times API** - Authoritative news source

### Example Integration:
```javascript
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        newsData = data.articles;
        displayNews();
    });
```

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance 📊

- Optimized images for faster loading
- Lazy loading for better performance
- Smooth animations and transitions
- Efficient DOM manipulation

## Future Enhancements 🔮

- [ ] Real-time API integration for live news
- [ ] User authentication and personalized feed
- [ ] Bookmark and save articles
- [ ] Push notifications for breaking news
- [ ] Social media sharing buttons
- [ ] Trending topics section
- [ ] Comments and discussion section
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## License 📄

This project is open source and available under the MIT License.

## Contributing 🤝

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support 💬

If you have any questions or issues:
1. Open an issue on GitHub
2. Create a discussion
3. Contact the maintainer

## Author 👨‍💻

Created with ❤️ by Ashwani Babbar

---

**Happy Reading! 📰**

Stay updated with the latest news from around the world!