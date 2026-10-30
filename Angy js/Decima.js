let valor_compra= 140000;
let cliente= true;
let descuento = 0;
let total_pagar = 0;

if(valor_compra >100000){
    if(cliente ==true){
        descuento= valor_compra*0.2;
    }else{
        descuento=valor_compra*0.1;
    }}else{
        if(cliente==true){
            descuento=valor_compra*0.05
        }else{
            descuento=onabort;
        }
    }

    total_pagar=valor_compra-descuento;

    console.log("el descuentro es:"+ descuento +"el valor a pagar es:"+ total_pagar);

 


