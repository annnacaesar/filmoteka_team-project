import teamList from "./teamList";
import teamTpl from "../../templates/team.hbs";
import markup from "./teamModalMarkup";

import * as basicLightbox from "basiclightbox";

const modalTeamRef = document.querySelector(".footer__btn");

modalTeamRef.addEventListener("click", onOpenModalTeam);


function onOpenModalTeam() {
  console.log("Hello");
  const modalTeam = basicLightbox.create(markup, {
    onShow: modalTeam => {
      window.addEventListener("keydown", escapeKeyCloseModal);
      window.addEventListener("click", clickForCloseModal);
      modalTeam.element().querySelector(".modal__close").onclick =
        modalTeam.close;
    },
    onClose: modalTeam => {
      window.removeEventListener("keydown", escapeKeyCloseModal);
      window.removeEventListener("click", clickForCloseModal);
    },
  });
  function escapeKeyCloseModal(event) {
    if (event.code === "Escape") {
      modalTeam.close();
    }
  }
  function clickForCloseModal(event) {
    console.log(event.target.classList.value);
    if (event.target.classList.value === "basicLightbox__placeholder") {
      modalTeam.close();
    }
  }

  modalTeam.show();
}

// ======================================================================
// --------------------------------------------------------------------------
// function onOpenModalTeam() {
//   console.log("Hello");
//   const modalTeam = basicLightbox.create(document.querySelector('template'))

//   modalTeam.show();
// }

// // -------------------------------------------------------------------------

// const openTeamModalBtn = document.querySelector('.footer__btn');
// const teamContainer = document.querySelector('.team__list');

// // const closeTeamModalBtn= document.querySelector('.js-team-close');
// // const backdropTeamModal = document.querySelector('.js-backdrop');

// const body = document.querySelector('body');

// openTeamModalBtn.addEventListener('click', onOpenModal);
// // const mmarkup = renderTeam(teamList);

// function onOpenModal(evt) {
//   evt.preventDefault();
//   console.log("Hello");
//   onOpenModalTeam();

//   renderTeam(teamList);
// }

// function renderTeam() {
//   const markup = teamTpl(teamList);
//   teamContainer.innerHTML = markup;
// }
