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

/*------------------------------------------------------------Dropdown Menus-------------------------------------------------------------------------------*/

const dropDown = (dropDownBtn, dropDownMenuId) => {

	const clickBtn = document.getElementById(dropDownBtn),

		dropdown = document.getElementById(dropDownMenuId)

	if (dropDownBtn && dropDownMenuId) {

		clickBtn.addEventListener('click', () => {

			dropdown.classList.toggle('dropdown-menu')


			clickBtn.classList.toggle('dropdown-btn')
		})
	}
}

dropDown('dropdownbtn', 'dropdowncontent')



const dropDownTwo = (dropDownBtnTwo, dropDownMenuIdTwo) => {

	const clickBtn = document.getElementById(dropDownBtn),

		dropdowntwo = document.getElementById(dropDownMenuId)

	if (dropDownBtnTwo && dropDownMenuIdTwo) {

		clickBtn.addEventListener('click', () => {

			dropdowntwo.classList.toggle('dropdown-menu-two')


			clickBtn.classList.toggle('dropdown-btn-two')
		})
	}
}

dropDown('dropdownbtntwo', 'dropdowncontenttwo')
