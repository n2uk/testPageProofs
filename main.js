const saveButton = document.querySelector('#saveButton');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');
saveButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});
modalBg.addEventListener('click', ()=>{
    modal.classList.remove('is-active');
});
var test = document.querySelectorAll('input[name="userType"]')
test.forEach((elem)=>{
    elem.addEventListener('change',(target)=>{
       getUserType();        
    })
})
function getUserType(){
    let result = document.querySelector('input[name="userType"]:checked').value
    if (result=="buyer"){
        document.querySelector('#siteCompany').style.display = 'none';
    }
    else
    {
        document.querySelector('#siteCompany').style.display = '';
    }
    console.log(result);
}





