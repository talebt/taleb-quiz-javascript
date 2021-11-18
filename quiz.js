const correctAnswers=['B','B','B','B'];
const form= document.querySelector('.quiz-form');
const result= document.querySelector('.result');
//console.log(form);
form.addEventListener('submit',t=>{
    t.preventDefault();
    

    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((i,index) => {
        if(i === correctAnswers[index]){
            score +=25; 
           
        }
    });
    scrollTo(0,0);
    //show results on page
    result.querySelector('span').textContent=`${score}%`;
    result.classList.remove('d-none');

    let output=0;
    

});
// setInterval(() => {

// })

