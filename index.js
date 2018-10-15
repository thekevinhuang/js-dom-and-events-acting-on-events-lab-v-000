function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi(){
  document.querySelector('ul.employee-list').append("<li> ${retrieveEmployeeInformation()} </li>")
}

function addNewLiOnClick() {

}

function retrieveEmployeeInformation() {

}
