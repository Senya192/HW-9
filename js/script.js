'use strict'
let fasadTop = document.querySelector('.fasadTop-choise'),
	fasadDown = document.querySelector('.fasadDown-choise'),
	stppanel = document.querySelector('.stppanel-choise');


fasadTop.addEventListener('click', (event) => {
	if (event.target.dataset.action === 'laimTop') {
		// console.log("lime")
		out.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasadtop/laim.png' >`;


	}
	if (event.target.dataset.action === 'baklajanTop') {
		out.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasadtop/baklajan-gl.png'>`;


	}
	if (event.target.dataset.action === 'chernyiTop') {

		out.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasadtop/chernyi-met-gl.png'>`;

	}
	if (event.target.dataset.action === 'rubinTop') {
		out.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasadtop/rubin-gl.png'>`;

	}
	if (event.target.dataset.action === 'orangTop') {
		out.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasadtop/orang_met-gl.png'>`;


	}
})

fasadDown.addEventListener('click', (event) => {
	if (event.target.dataset.action === 'laimDown') {
		out2.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasaddown/laim.png'>`;


	}
	if (event.target.dataset.action === 'baklajanDown') {
		out2.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasaddown/baklajan-gl.png'>`;


	}
	if (event.target.dataset.action === 'chernyiDown') {
		out2.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasaddown/chernyi-met-gl.png'>`;


	}
	if (event.target.dataset.action === 'rubinDown') {

		out2.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasaddown/rubin-gl.png'>`;


	}
	if (event.target.dataset.action === 'orangDown') {

		out2.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/fasaddown/orang_met-gl.png'>`;

	}
})

stppanel.addEventListener('click', (event) => {
	if (event.target.dataset.action === 'stpanel02') {

		out3.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/stpanel/02.png'>`;

	}
	if (event.target.dataset.action === 'stpanel03') {
		out3.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/stpanel/03.png'>`;


	}
	if (event.target.dataset.action === 'stpanel08') {
		out3.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/stpanel/08.png'>`;


	}
	if (event.target.dataset.action === 'stpanel33') {
		out3.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/stpanel/33.png'>`;


	}
	if (event.target.dataset.action === 'stpanel27') {
		out3.innerHTML = `<img src='https://www.antarescompany.ru/files/stil/bazis_mdf/stpanel/27.png'>`;


	}
})






