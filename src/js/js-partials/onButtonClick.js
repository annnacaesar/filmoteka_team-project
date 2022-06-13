const modalBtn = document.querySelector('.films__container');

modalBtn.addEventListener('click', onModalBtn);

function getQueue() {
  return JSON.parse(localStorage.getItem('queueMovies'));
}

function onModalBtn(evt) {
    // if (evt.target.nodeName !== "BUTTON") {
    //     return
    // }
    console.log(evt.target);
    let target = evt.target
    localStorage.setItem('Queue', target)
}