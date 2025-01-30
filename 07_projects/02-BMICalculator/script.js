const form=document.querySelector('form')
//  const height= parseInt(document.querySelector('#height').value)     (here declaration will give you empty)

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if (height ==='' || height<0 || isNaN(height)) {
        results.innerHTML=`Please give a valid hieght ${height}`
    }else if (weight ==='' || weight<0 || isNaN(weight)) {
        results.innerHTML=`Please give a valid hieght ${height}`
    }else{
       const bmi=(weight/((height*height)/10000).toFixed(2))
       //show results
       results.innerHTML=`<span>${bmi}</span>`
    }
})