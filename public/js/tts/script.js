function answers(){
    let x = document.getElementById("choice").value;
    let y = document.getElementById("answer").value;
    if(x==y && x=="takjil"){
        correct();
        for (i=1; i<=6; i++){
            if (i==2){
                document.getElementById("dua-mendatar-kotak-ke-4").style.visibility='visible';
                
            } else{
                document.getElementById("satu-menurun-kotak-ke-"+i).style.visibility='visible';
            }
        }
    } else if(x==y &&x=="tadarus"){
        correct();
        for (i=1; i<=7; i++){
            if (i==1){
                document.getElementById("dua-mendatar-kotak-ke-1").style.visibility='visible';
            } else if (i==4){
                document.getElementById("empat-mendatar-kotak-ke-6").style.visibility='visible';
            } else if(i==6){
                document.getElementById("lima-mendatar-kotak-ke-3").style.visibility='visible';
            } else{
                document.getElementById("dua-menurun-kotak-ke-"+i).style.visibility='visible';
            }
        }
    } else if(x==y && x=="taraweh"){
        correct();
        for (i=1; i<=7; i++){
            document.getElementById("dua-mendatar-kotak-ke-"+i).style.visibility='visible';
        }
    } else if(x==y && x=="eidulfitr"){
        correct();
        for (i=1; i<=9; i++){
            if(i==1){
                document.getElementById("dua-mendatar-kotak-ke-6").style.visibility='visible';
            } else if(i==9){
                document.getElementById("enam-mendatar-kotak-ke-5").style.visibility='visible';
            } else{
                document.getElementById("tiga-menurun-kotak-ke-"+i).style.visibility='visible';
            }
        }
    } else if(x==y && x=="ramadan"){
        correct();
        for (i=1; i<=7; i++){
            document.getElementById("empat-mendatar-kotak-ke-"+i).style.visibility='visible';
        }
    } else if(x==y && x=="haus"){
        correct();
        for (i=1; i<=4; i++){
            document.getElementById("lima-mendatar-kotak-ke-"+i).style.visibility='visible';
        }
    } else if(x==y && x=="sahur"){
        correct();
        for (i=1; i<=5; i++){
            document.getElementById("enam-mendatar-kotak-ke-"+i).style.visibility='visible';
        }
    } else{
        incorrect();
    }
}

function correct(){
    alert("Jawaban Anda Benar!")
}

function incorrect(){
    alert("Jawaban Anda Salah, Silakan Coba Lagi:)")
}