const menu = document.getElementById('navbar')
const form = document.getElementById('form')
const alerta = document.getElementById('alerta')
const correcto = document.getElementById('correcto')
const inicio = menu.children[0]
const servicios = menu.children[1]
const contacto = menu.children[2]
const name_form = form[0]
const email_form = form[1]
const phone_form = form[2]
const consulta_form = form[3]
window.onscroll = () => {
	const scroll = window.scrollY
	if (scroll > 800 && scroll < 2899) {
		inicio.classList.remove('active')
		servicios.classList.add('active')
		contacto.classList.remove('active')
	} else if (scroll > 2900) {
		inicio.classList.remove('active')
		servicios.classList.remove('active')
		contacto.classList.add('active')
	} else {
		inicio.classList.add('active')
		servicios.classList.remove('active')
		contacto.classList.remove('active')
	}
}

form.addEventListener('submit', (e) => {
	const xhr = new XMLHttpRequest()
	const data = new FormData(form)
	const name = data.get('name')
	const email = data.get('email')
	const phone = data.get('phone')
	const consulta = data.get('consulta')
	if (name === '' || email === '' || phone === '' || consulta === '') {
		alerta.classList.remove('d-none')
		if (name === '') {
			name_form.classList.add('is-invalid')
		} else {
			name_form.classList.remove('is-invalid')
		}
		if (email === '') {
			email_form.classList.add('is-invalid')
		} else {
			email_form.classList.remove('is-invalid')
		}
		if (phone === '') {
			phone_form.classList.add('is-invalid')
		} else {
			phone_form.classList.remove('is-invalid')
		}
		if (consulta === '') {
			consulta_form.classList.add('is-invalid')
		} else {
			consulta_form.classList.remove('is-invalid')
		}
	} else {
		xhr.open('POST', 'php/mail.php')
		xhr.onload = () => {
			if (xhr.status === 200) {
				alerta.classList.add('d-none')
				name_form.classList.remove('is-invalid')
				email_form.classList.remove('is-invalid')
				phone_form.classList.remove('is-invalid')
				consulta_form.classList.remove('is-invalid')

				correcto.classList.remove('d-none')
				setTimeout(() => correcto.classList.add('d-none'), 5000)
				form.reset()
			} else {
			}
		}
		// }
		xhr.send(data)
	}
	e.preventDefault()
})
