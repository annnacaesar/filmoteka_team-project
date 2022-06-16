
import teamList from './teamList';
import teamTpl from "../../templates/team.hbs";
import markup from './teamModalMarkup';

import * as basicLightbox from "basiclightbox";


const modalTeamRef = document.querySelector(".footer__btn");



modalTeamRef.addEventListener("click", onOpenModalTeam);


function onOpenModalTeam() {

  console.log("Hello");
  const modalTeam = basicLightbox.create(markup, {
    onShow: modalTeam => {
      window.addEventListener("keydown", escapeKeyCloseModal);
      modalTeam.element().querySelector(".modal__close").onclick =
        modalTeam.close;
    },
    onClose: modalTeam => {
      window.removeEventListener("keydown", escapeKeyCloseModal);
    },
  });
  function escapeKeyCloseModal(event) {
    if (event.code === "Escape") {
      modalTeam.close();
    }
  }
  modalTeam.show();
}

// ======================================================================


// const openTeamModalBtn = document.querySelector('.footer__btn');
const teamContainer = document.querySelector('.team__list');


// const closeTeamModalBtn= document.querySelector('.js-team-close');
// const backdropTeamModal = document.querySelector('.js-backdrop');

// const body = document.querySelector('body');

// openTeamModalBtn.addEventListener('click', onOpenModal);
// const mmarkup = renderTeam(teamList);

function onOpenModal(evt) {
    evt.preventDefault();
    console.log('Hello');

  renderTeam(teamList);
 
}

function renderTeam() {
  const markup = teamTpl(teamList);
  teamContainer.innerHTML = markup;
}


