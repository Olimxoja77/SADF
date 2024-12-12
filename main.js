
        const movies = [
            { name: "The Shawshank Redemption", rating: 9.3 },
            { name: "The Dark Knight", rating: 9.0 },
            { name: "Inception", rating: 8.8 },
            { name: "Interstellar", rating: 8.6 },
            { name: "The Matrix", rating: 8.7 },
            { name: "Avengers: Endgame", rating: 8.4 },
            { name: "Titanic", rating: 7.8 }
        ];

        
        function displayMovies(moviesList) {
            const movieListElement = document.getElementById("movieList");
            movieListElement.innerHTML = '';

            moviesList.forEach(movie => {
                const li = document.createElement('li');
                li.classList.add('movie');
                li.textContent = `${movie.name} (Rating: ${movie.rating})`;
                movieListElement.appendChild(li);
            });
        }

        
        displayMovies(movies);

        
        function filterMovies() {
            const input = document.getElementById("movieInput").value.toLowerCase();

           
            const filteredMovies = movies.filter(movie => 
                movie.name.toLowerCase().includes(input)
            );

         
            displayMovies(filteredMovies);
        }