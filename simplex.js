//digite os elementos na matriz conforme o problema

//const matriz = Array(n);
var qtdRest = 3;
var qtdVar = 2;
var z =[1,1.2,1.5,0];
var restr1 = [4,1,0.8,10];
var restr2 = [0.9,1,5,9.5];
var restr3 = [1.2,3,1.5,11];

//var z =[2,4,5,3,0];
//var restr1 = [0.3,0.3,0.5,0.4,40];
//var restr2 = [0.4,0.3,0.2,0.4,40];
//var restr3 = [0.3,0.4,0.3,0.2,60];
var obtemInversa = -1;


//cria variaveis de folga z
for(i=1;i<=qtdVar;i++){
  z.splice(qtdVar+i,0,0);
}


//cria variavel de folga R1
for(i=1;i<=qtdVar;i++){
  if(i==1){
    restr1.splice(qtdVar+i,0,1);
  }else{
    restr1.splice(qtdVar+i,0,0);
  }
}
//cria variavel de folga R2
for(i=1;i<=qtdVar;i++){
  if(i==2){
    restr2.splice(qtdVar+i,0,1);
  }else{
    restr2.splice(qtdVar+i,0,0);
  }
}
//cria variavel de folga R3
for(i=1;i<=qtdVar;i++){
  if(i==3){
    restr3.splice(qtdVar+i,0,1);
  }else{
    restr3.splice(qtdVar+i,0,0);
  }
}
//cria Z negativo

for(i=0;i<z.length;i++){
  z[i] *=obtemInversa; 
}

//cria matriz 
console.log("|    Z    |  x1 |  x2 |  x3 |  x4 | xf1| xf2| xf3| sol|");   
//var matriz = [[z,restr1,restr2,restr3]]

console.table([z,restr1,restr2,restr3]);


var menorValor=Math.min(...z);
while(menorValor<0){

  menorValor=Math.min(...z);

if(menorValor<0){
  console.log("---------------------------------------RECALCULAR-----------------------------------------");
}else{
  var terminou = 1;
  break;
}

//coluna que entra
console.log(menorValor);
for(i=0;i<z.length;i++){
  if(z[i]==menorValor){
    console.log("coluna que entra: "+(i));
    var maiorValor = [restr1[i],restr2[i],restr3[i]];
    var max = Math.max(...maiorValor);
    var pivo = max;
    var pivol1 = z[i]*obtemInversa;
    var pivol2 = restr1[i]*obtemInversa;
    var pivol3 = restr2[i]*obtemInversa;
    var pivol4 = restr3[i]*obtemInversa; 

  }
  if(restr1[i]==pivo){
      console.log("Rest1 Linha que sai: "+(i));
     //cria nova linha Pivo caso seja 1°restrição 
      restr1 = restr1.map(item=>item/pivo); 

      //Gera nova L1 -> Z
      var aux = restr1.map(item=>item*pivol1);
       for(r=0;r<z.length;r++)
       {z[r]  = (z[r] + aux[r]);}

       //cria nova linha 3
      var aux3 = restr1.map(item=>item*pivol3);
       for(r=0;r<z.length;r++)
       {restr2[r]  = (restr2[r] + aux3[r]);}

       //cria nova linha4
       var aux4 = restr1.map(item=>item*pivol4);
       for(r=0;r<z.length;r++)
       {restr3[r]  = (restr3[r] + aux4[r]);}
  
    }


      if(restr2[i]==pivo){
        console.log("Rst2 linha que sai: "+(i));
       //cria nova linha PIVO Pivo caso seja 2°restrição
        restr2 = restr2.map(item=>item/pivo);

      //  cria nva linha 1
      var aux0 = restr2.map(item=>item*pivol1);
       for(r=0;r<z.length;r++)
       {z[r]  = (z[r] + aux0[r]);}

       //cria nova linha 3
      var aux1 = restr2.map(item=>item*pivol2);
       for(r=0;r<z.length;r++)
       {restr1[r]  = (restr1[r] + aux1[r]);}

       //cria nova linha4
      var aux3 = restr2.map(item=>item*pivol4);
       for(r=0;r<z.length;r++)
       {restr3[r]  = (restr3[r] + aux3[r]);}
    }



    if(restr3[i]==pivo){
      console.log("rst3 linha que sai: "+(i));
      //cria nova linha Pivo Pivo caso seja 3°restrição
      restr3 = restr3.map(item=>item/pivo);

                //  cria nva linha 1
      var aux0 = restr3.map(item=>item*pivol1);
       for(r=0;r<z.length;r++)
       {z[r]  = (z[r] + aux0[r]);}

       //cria nova linha 3
      var aux1 = restr3.map(item=>item*pivol2);
       for(r=0;r<z.length;r++)
       {restr1[r]  = (restr1[r] + aux1[r]);}

       //cria nova linha4
      var aux3 = restr3.map(item=>item*pivol3);
       for(r=0;r<z.length;r++)
       {restr2[r]  = (restr2[r] + aux3[r]);}
    }
}

//pivo
console.log("Pivo: "+pivo);
console.log("Pivo L1: "+pivol1);
console.log("Pivo L2: "+pivol2);
console.log("Pivo L3: "+pivol3);
console.log("Pivo L4: "+pivol4);
//linha que sai
for(i=0;i<z.length;i++){
  if(restr1[i]){

  }
}
//nova linha pivo

//tabela com linha que entra
console.log("|    Z    |   x1  |   x2   |   x3  |   x4   |   xf1  |  xf2  |  xf3  |   sol  |");  
console.table([z.map(item=>item.toFixed(1)),restr1.map(item=>item.toFixed(1)),restr2.map(item=>item.toFixed(1)),restr3.map(item=>item.toFixed(1))]);
}

if(terminou == 1){
  console.log("Soulcao Otima: "+z[z.length-1]);
}