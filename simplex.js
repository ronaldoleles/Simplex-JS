var prompt = require('prompt-sync')();
console.log("Digite tudo sem espaços")
//var funcObjetiva= prompt("Digite aqui a função objetiva: ");
//var qtdRest = prompt("Digite a quantidade de restrições: ");
//var r1= prompt("Digite a Restrição-1: ");
//var r2= prompt("Digite a Restrição-2: ");


if(qtdRest==3){
  //var r3= prompt("Digite a Restrição-3: ");
}
//prob1
//var qtdRest =3;
//var funcObjetiva = "2x1+4x2+5x3+3x4";
//var r1= "0.3x1+0.3x2+0.5x3+0.4x4<=40";
//var r2 ="0.4x1+0.3x2+0.2x3+0.4x4<=40";
//var r3 ="0.3x1+0.4x2+0.3x3+0.2x4<=60"; 

//prob2
//var qtdRest =2;
//var funcObjetiva = "1x1+2x2+3x3+4x4";
//var r1= "0x1+2x2+3x3+0x4<=10";
//var r2 ="1x1+0x2+0x3+4x4<=20.4";

//prob3
//var qtdRest =3;
//var funcObjetiva= "1x1+1.2x2+1.5x3";
//var r1="4x1+1x2+0.8x3<=10";
//var r2="0.9x1+1x2+5x3<=9.5";
//var r3="1.2x1+3x2+1.5x3<=11";

//prob4
var qtdRest = 3;
var funcObjetiva ="1x1+1x2";
var r1="5x1+2x2<=20";
var r2="2x1-1x2>=2";
var r3="1x1+5x2>=15";

var qtdVar;
var z=[];
var restr1=[];
var restr2=[];
var restr3=[];

var cont=0;
var aux=0;
var nVar=0;

//var qtdRest = 3;
//vai de 0 a 3 = 4;

var obtemInversa = -1;

//cria vetor z valores tratados funcao Objetiva
for(i=0; i<=funcObjetiva.length; i++){
  //define a quantidade de variaveis 
  
  if(funcObjetiva.slice(i,i+1)=="x"){
      qtdVar ++;
  }
  
 //console.log(funcObjetiva.slice(i,i+1))
  if(funcObjetiva.slice(i,i+1)=="+"||funcObjetiva.slice(i,i+1)=="-"){  
   
    //console.log(funcObjetiva.slice(aux,cont-2))
    z[nVar] = parseFloat(funcObjetiva.slice(aux,cont-2));
    aux = i;
    nVar++;
  } 
  if(i==funcObjetiva.length){
   // console.log(funcObjetiva.slice(aux,cont-2))
    z[nVar] = parseFloat(funcObjetiva.slice(aux,cont-2));
  }
  cont++;
  //console.log("cont:"+cont+" i:"+i)
  if(i==funcObjetiva.length){
    z.splice(i+1,0,0);
  }
}
console.log("------------------Dados Filtrados----------------")
console.log(z);

//cria vet rest1 com valores tratados
aux =0;
nVar =0;
for(i=0; i<=r1.length; i++){

  if((r1.slice(i,i+1)=="+")||(r1.slice(i,i+1)=="-")||(r1.slice(i,i+1)=="<")){  
    
    //console.log(r1.slice(aux,i-2))
    restr1[nVar] = parseFloat(r1.slice(aux,i-2));
    aux = i;
    aux++;
    nVar++;
  }
  if(i==r1.length){
    aux = i;
  // console.log(r1.slice(aux,i-2))
    restr1[nVar] = parseFloat(r1.slice(aux-2,i));
  }
}
console.log(restr1);

//cria rest2 com valores tratados
aux =0;
nVar =0;
for(i=0; i<=r2.length; i++){

  if((r2.slice(i,i+1)=="+")||(r2.slice(i,i+1)=="-")||(r2.slice(i,i+1)=="<")){  
    
    //console.log(r1.slice(aux,i-2))
    restr2[nVar] = parseFloat(r2.slice(aux,i-2));
    aux = i;
    aux++;
    nVar++;
  }
  if((r2.slice(i,i+1)=="=")){
    aux1 = i;
  }
  if(i==r2.length){
    //console.log(r2.slice(aux-4,i));
    restr2[nVar] = parseFloat(r2.slice(aux1+1,i));
  }
}
console.log(restr2);
if(qtdRest==3){
//cria restr3 com valores tratados
aux =0;
nVar =0;
for(i=0; i<=r3.length; i++){

  if((r3.slice(i,i+1)=="+")||(r3.slice(i,i+1)=="-")||(r3.slice(i,i+1)=="<")){  
    
    //console.log(r1.slice(aux,i-2))
    restr3[nVar] = parseFloat(r3.slice(aux,i-2));
    aux = i;
    aux++;
    nVar++;
  }
  if((r3.slice(i,i+1)=="=")){
    aux1 = i;
  }
  if(i==r3.length){
    
  // console.log(r1.slice(aux,i-2))
    restr3[nVar] = parseFloat(r3.slice(aux+1,i));
  }
}
console.log(restr3);
}

//cria variaveis de folga para cada restricao
var tamanho = z.length;
//console.log(tamanho)
for(i=1;i<=qtdRest;i++){ 
    z.splice(tamanho+i,0,0);
  
}

//cria variaveis de folga z
//for(i=1;i<=qtdVar;i++){
  //z.splice(qtdVar+i,0,0);
//}

//cria variavel de folga R1
var tamanho2 = restr1.length;
for(i=0;i<qtdRest;i++){
  if(i==0){
    restr1.splice(tamanho2-1,0,1);
  }else{
    restr1.splice(tamanho2+i-1,0,0);
 }
}
//cria variavel de folga R2
for(i=0;i<qtdRest;i++){
  if(i!=1){
    restr2.splice(tamanho2+i-1,0,0);
  }
  if(i==1){
    restr2.splice(tamanho2,0,1);
  }
}

//cria variavel de folga R3
if(qtdRest==3){
for(i=0;i<qtdRest;i++){
  if(i!=2){
    restr3.splice(tamanho2+i-1,0,0);
  }
  if(i==2){
    restr3.splice(tamanho2+1,0,1);
  }
}
}
//cria Z negativo

for(i=0;i<z.length;i++){
  z[i] *=obtemInversa; 
}

//cria matriz 
console.log("--------------------Criacao de variaveis de folga----------------------------------------")
console.log("|    Z    |  x1 |  x2 |  x3 |  x4 | xf1| xf2| xf3| sol|");   
//var matriz = [[z,restr1,restr2,restr3]]
if(qtdRest==2){
  console.table([z,restr1,restr2]);
}
if(qtdRest==3){
  console.table([z,restr1,restr2,restr3]);
}



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

for(i=0;i<z.length;i++){
  if(z[i]==menorValor){
    console.log("coluna que entra: "+(i+1));
    if(qtdRest==3){
       var maiorValor = [restr1[i],restr2[i],restr3[i]];
    }else{
      var maiorValor = [restr1[i],restr2[i]];
    }
   
    var max = Math.max(...maiorValor);
    var pivo = max;
    console.log("Pivo: "+pivo);
    var pivol1 = z[i]*obtemInversa;
    var pivol2 = restr1[i]*obtemInversa;
    var pivol3 = restr2[i]*obtemInversa;
    if(qtdRest==3){
      var pivol4 = restr3[i]*obtemInversa;
    }
     

  }
  if(restr1[i]==pivo){
      console.log("Rest1 Linha que sai: ");
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
       if(qtdRest==3){
       var aux4 = restr1.map(item=>item*pivol4);
       for(r=0;r<z.length;r++)
       {restr3[r]  = (restr3[r] + aux4[r]);}}
  
    }


      if(restr2[i]==pivo){
        console.log("Rst2 linha que sai: ");
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
       if(qtdRest==3){
      var aux3 = restr2.map(item=>item*pivol4);
       for(r=0;r<z.length;r++)
       {restr3[r]  = (restr3[r] + aux3[r]);}}
    }


    if(qtdRest==3){
    if(restr3[i]==pivo){
      console.log("rst3 linha que sai: ");
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
}

//tabela com linha que entra
console.log("|    Z    |   x1  |   x2   |   x3  |   x4   |   xf1  |  xf2  |  xf3  |   sol  |");  
if(qtdRest==2){
  console.table([z.map(item=>item.toFixed(1)),restr1.map(item=>item.toFixed(1)),restr2.map(item=>item.toFixed(1))]);
}
if(qtdRest==3){
  console.table([z.map(item=>item.toFixed(1)),restr1.map(item=>item.toFixed(1)),restr2.map(item=>item.toFixed(1)),restr3.map(item=>item.toFixed(1))]);
}
}

if(terminou == 1){
  console.log("Soulcao Otima: "+z[z.length-1]);
}