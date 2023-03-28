

function calcular(){
    let campo_a = parseFloat(document.getElementById('campo_a').value);
    let campo_b = parseFloat(document.getElementById('campo_b').value);
    let campo_c = parseFloat(document.getElementById('campo_c').value);

    let delta = campo_b**2-4*campo_a*campo_c
    let xa = (-campo_b+Math.sqrt(delta))
    let xa1 = (xa/(2*campo_a))
    alert("X1 = " + xa1)

    let xb= (-campo_b-Math.sqrt(delta))
    let xb1= (xb/(2*campo_a))
    alert("X2 = " + xb1)


}   
