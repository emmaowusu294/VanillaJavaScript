let html = ``;
const studentData = [{
   name: "Emmanuel",
   age: 30
}, {
   name: "Biney",
   age: 26
}].forEach((student) => {
   console.log(student);
   
   html += `
       <p class="js-student-name">${student.name}</p>
   `;
   
});
console.log(html);

const nameButton = document.querySelector('.js-name-button');
nameButton.addEventListener('click', () => {
   document.querySelector('.js-name-cont')
       .innerHTML = html;

});