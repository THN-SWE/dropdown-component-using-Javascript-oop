function createNewDropDown(items) {
    // this is a factory function
    // const items = [...items]
    const dropDownContainer = document.createElement('div')
    dropDownContainer.classList.add('dropDownContainer')
  
    function createDropDown() {
        dropDownContainer.innerHTML = newDivInnerHtml(items)
        return dropDownContainer

    }
    return {

        displayDropDown: (dropDownButton) => {
            //toggle on and off a class.
            dropDownContainer.classList.toggle('display-toggle')
            
            dropDownButton.appendChild(createDropDown())
        },
        // hideDropDown:()=> {
        //     dropDownContainer.classList.toggle('display-toggle')


        // }

    }
}
const newDivInnerHtml = (l) => {
    l = [...l]
    let divInnerHtml = ''

    let list_length = l.length
    for (i = 0; i < list_length; i++) {
        divInnerHtml += `<p>${l[i]}</p>`
    }

    return divInnerHtml
}

// buttons for activate dropdowns
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

// creating new drop down object 
let dp1 = createNewDropDown(['opt1', 'op2', 'op3', 'op4'])
btn1.addEventListener('click', () => {

    dp1.displayDropDown(btn1)
})
// creating new drop down object 
let dp2 = createNewDropDown(['1', '2', '4', '5'])
btn2.addEventListener('click', () => {


    dp2.displayDropDown(btn2)
})
// creating new drop down object 
let dp3 = createNewDropDown(['we', 'opwef2', 'orthp3', '4t3'])
btn3.addEventListener('click', () => {

    dp3.displayDropDown(btn3)
})
// creating new drop down object 
let dp4 = createNewDropDown(['33', '44', '55', '66'])
btn4.addEventListener('click', () => {
    
    dp4.displayDropDown(btn4)
})






