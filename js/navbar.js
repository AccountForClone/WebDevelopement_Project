/*---------------------------------------------------------Sidebar open/close toggle--------------------------------------------------------------------------*/
const toggleResult = (toggleElement, show ) => {

	const toggleBtn = document.getElementById(toggleElement),

		elementId = document.getElementById(show)


	if (toggleBtn && elementId) {

		toggleBtn.addEventListener('click', () => {

			elementId.classList.toggle('show-element')

			
			toggleBtn.classList.toggle('toggle-element')
		})
	}
}
toggleResult('dropdownbtn', 'dropdowncontent')
toggleResult('dropdownbtntwo', 'dropdowncontenttwo')
toggleResult('menu-toggle','navbar')

