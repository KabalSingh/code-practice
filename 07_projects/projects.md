##project 1

```javaScript 

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
 
buttons.forEach(function (button) {
    console.log();
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id =='grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id =='white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id =='blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id =='yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id =='purple') {
            body.style.backgroundColor = e.target.id;
        }
        
    })
})

```

##project 2

```javaScript 

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

```


##project 3

```javaScript


const clock=document.getElementById('clock')



setInterval(function()  {
    let date=new Date();
    // console.log(date.toLocaleDateString());
    clock.innerHTML=date.toLocaleDateString();
}, 1000);


``


##project 4

```javaScript


```