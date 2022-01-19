// ScrollReveal 

const sr = ScrollReveal({
	distance: '60px',
	duration: 1650,
	delay: 250
})

sr.reveal(`.header__presentation, .services__disclaimer-title, .services__list-title, .title-main`, {origin: 'bottom'});
sr.reveal(`.title`, {origin: 'bottom', delay: 200});
sr.reveal(`.services__subtitle, .contacts__photo`, {origin: 'top'});
sr.reveal(`.header__info-box, .services__disclaimer-text, .services__consult-list, .contacts__button`, {origin: 'left', delay: 100});