window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        const movieArticle = document.createElement('article');
        movieArticle.id = movie.imdbID;

        const titleElement = document.createElement('h1');
        titleElement.textContent = movie.Title;
        movieArticle.appendChild(titleElement);

        const posterElement = document.createElement('img');
        posterElement.src = movie.Poster;
        movieArticle.appendChild(posterElement);

        const releasedElement = document.createElement('p');
        releasedElement.innerHTML = `<strong>Released:</strong> ${movie.Released} `;
        movieArticle.appendChild(releasedElement);

        const runtimeElement = document.createElement('p');
        runtimeElement.innerHTML = `<strong>Runtime:</strong> ${movie.Runtime} min`;
        movieArticle.appendChild(runtimeElement);

        const genresElement = document.createElement('p');
        genresElement.innerHTML = `<strong>Genres:</strong> ${movie.Genres.join(', ')}`;
        movieArticle.appendChild(genresElement);

        const directorsElement = document.createElement('p');
        directorsElement.innerHTML = `<strong>Directors:</strong> ${movie.Directors.join(', ')}`;
        movieArticle.appendChild(directorsElement);

        const writersElement = document.createElement('p');
        writersElement.innerHTML = `<strong>Writers:</strong> ${movie.Writers.join(', ')}`;
        movieArticle.appendChild(writersElement);

        const actorsElement = document.createElement('p');
        actorsElement.innerHTML = `<strong>Actors:</strong> ${movie.Actors.join(', ')}`;
        movieArticle.appendChild(actorsElement);

        const plotElement = document.createElement('p');
        plotElement.innerHTML = `<strong>Plot:</strong> ${movie.Plot}`;
        movieArticle.appendChild(plotElement);

        const metascoreElement = document.createElement('p');
        metascoreElement.innerHTML = `<strong>Metascore:</strong> ${movie.Metascore}`;
        movieArticle.appendChild(metascoreElement);

        const imdbRatingElement = document.createElement('p');
        imdbRatingElement.innerHTML = `<strong>IMDB Rating:</strong> ${movie.imdbRating}/10`;
        movieArticle.appendChild(imdbRatingElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => {
          window.location.href = `edit.html?imdbID=${movie.imdbID}`;
        };
        movieArticle.appendChild(editButton);

        bodyElement.appendChild(movieArticle);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
