document.getElementById('btn_generate').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName ;
    document.getElementById('genderOutput').innerText = initPerson.genderName ;
    document.getElementById('professionOutput').innerText = initPerson.professionOutput ;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
})


document.getElementById('btn_reset').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('secondNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
})