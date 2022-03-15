/*Faça um programa que leia um valor em metros e o exiba em centimetros e milimetros*/ 


    var conversor = parseFloat(prompt('Qual o Valor em Metros : '));

    conversorCentimetros = conversor*100;
    conversorMilimetros = conversor*1000;

    console.log("O Valor Digitado foi: "+conversor+"m,","\n equivale a: "+conversorCentimetros,"Centimetros e "+conversorMilimetros,"Milimetros.");