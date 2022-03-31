
'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const movieDB = {
      movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
      ]
   };
   //movieDB.movieDB.sort();
   const adv = document.querySelectorAll('.promo__adv img'),
         poster = document.querySelector('.promo__bg'),
         genre = poster.querySelector('.promo__genre'),
         movieList = document.querySelector('.promo__interactive-list'),
         addForm = document.querySelector('form.add'),
         addInput = addForm.querySelector('.adding__input'),
         checkbox = addForm.querySelector('[type="checkbox"]'),
         btn = document.querySelector('button');

   addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let newFilm = addInput.value;
      const favorite = checkbox.checked; 
      
      if(newFilm){
         if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
         }
         if(favorite){
            console.log("любимый фильм");
         }
         movieDB.movies.push(newFilm);
         sortArr(movieDB.movies);
         createMovieList(movieDB.movies, movieList);
      }

      addForm.target.reset();
   });

   const daleteAdv = (arr) =>{
      adv.forEach(item => {
         item.remove();
      });
   };
   
   const makeChanges = () => {
      genre.textContent = 'ДРАМА';

      poster.style.cssText = 'background-image: url("img/bg.jpg")';
   };
   
   const sortArr = (arr) => {
      arr.sort();
   };
   

   function createMovieList(films, parent){
      parent.innerHTML = '';
      sortArr(films);
      films.forEach((film, i) =>{
         parent.innerHTML += `
         <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
         </li>
         `;
      });

      document.querySelectorAll('.delete').forEach((btn, i) => {
         btn.addEventListener('click', () =>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(movieDB.movies, movieList);
         });
      });
   };
   daleteAdv(adv);
   makeChanges();
   createMovieList(films, parent);

   });