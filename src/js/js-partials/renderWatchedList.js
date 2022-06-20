// import ApiService from './API';
// import appendFilmsMarkup from './appendFilmsMarkup';

// const apiService = new ApiService();
// const library = document.querySelector('.js-films-list-library');

// window.addEventListener('load', onLibraryLoad);

// function onLibraryLoad () {
//     let watchedList = [];
//     watchedList = JSON.parse(localStorage.getItem('AllWatchedMovies'));
//     console.log(watchedList);


//     watchedList.forEach(function (element) {
//       apiService.movieId = element.id;
//       console.log(apiService.movieId);

//       apiService.fetchById(element.id).then(({ results }) => {
//         appendFilmsMarkup(results, library);
//       });

//     });

    
// };