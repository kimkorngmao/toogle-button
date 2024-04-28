const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', () => {
    //change theme of website
    document.body.classList.toggle('dark')
})