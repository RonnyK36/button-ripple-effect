const btnEl = document.querySelector('.btn');

btnEl.addEventListener('mouseover', (event) => {
    const xPos = (event.pageX - btnEl.offsetLeft);
    const yPos = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPosition", xPos + "px");
    btnEl.style.setProperty("--yPosition", yPos + "px");
})