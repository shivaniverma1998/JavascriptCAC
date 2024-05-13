const form = document.querySelector('form');

//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    ///const  = document.querySelector('#bmiresult');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        //yaha chiye formula to calculate BMI
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML  = `<span>${bmi}</span>`;
        if (bmi < 18.6){
            console.log("under weight");
            results.innerHTML = `${bmi} is Under weight`;
        }else if (bmi > 18.6 && bmi < 24.9){
            console.log("weight is in normal range");
            results.innerHTML = `${bmi} is in normal range`;
        }
        else {
            console.log("over weight");
            results.innerHTML = `${bmi} is Over weight`;
        }
    }
})