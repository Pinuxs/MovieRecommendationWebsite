const apiEndpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=f8b57db9fe486acc54732ebe68b76c7b&language=en-US';
let userFavorites = [];
// Get the movie cards container
const movieCardsContainer = document.querySelector('.movie-cards');

// Get the movie cards
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    const movieCards = data.results.map(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      // Add the movie image as the background of the card
      movieCard.style.backgroundImage = `url(${movie.poster_path})`;

      const movieTitle = document.createElement('h2');
      movieTitle.textContent = movie.title;
      movieCard.appendChild(movieTitle);

      const movieOverview = document.createElement('p');
      movieOverview.textContent = movie.overview;
      movieCard.appendChild(movieOverview);

      const movieButton = document.createElement('button');
      movieButton.textContent = 'Add to Favorites';
      
      movieButton.addEventListener('click', () => {
        // Get the movie title from the button
        const movieTitle = movieButton.textContent;
      
        // Add the movie to the user's favorites
        userFavorites.push(movieTitle);
      
        // Update the button text to reflect the new state
        movieButton.textContent = 'Remove from Favorites';
      });
      movieCard.appendChild(movieButton);

      return movieCard;
    });

    movieCardsContainer.append(...movieCards);
  });

