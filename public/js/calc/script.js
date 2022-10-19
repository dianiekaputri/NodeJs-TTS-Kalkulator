function ins(num){
	var hasil = document.kalkulator.calc.value;
    // berfungsi agar tidak ada operasi diawal
    if(hasil[0]!="+"||hasil[0]!="*"||hasil[0]!="/"){
        // berfungsi agar tidak ada duplikat operasi
        if(( (hasil[hasil.length-1]=="+"||hasil[hasil.length-1]=="-"||hasil[hasil.length-1]=="*"
        ||hasil[hasil.length-1]=="/"||hasil[hasil.length-1]==".")&&(num=="+"||num=="-"||num=="*"||num=="/"||num==".") )){
            
        } else{
            document.kalkulator.calc.value+=num;
            hasil = document.kalkulator.calc.value;
            if(hasil[0]=="+"||hasil[0]=="*"||hasil[0]=="/"){
                hapusSemua();
            }
        }
    } else{

    }
    hasil = document.kalkulator.calc.value;
	//  berfungsi agar tidak duplikat (0)
	if((hasil[0]=="0"&&hasil[1]=="0")){
        document.kalkulator.calc.value="0";
    }
    //  berfungsi ketika diklik 0 kemudian diklik angka berubah jadi angka
    if((hasil[0]=="0"&&hasil[1]<=9)){
        document.kalkulator.calc.value=num;
    }
    // berfungsi untuk bilangan desimal
    if (hasil=="."){
        document.kalkulator.calc.value="0.";
    }
	console.log(hasil[hasil.length-2]);
}
function hapusSemua(){
	document.kalkulator.calc.value = "";
}
function del(){
	var hapus = document.kalkulator.calc.value;
	document.kalkulator.calc.value = hapus.substr(0,hapus.length-1);
}
function samaDengan(){
    var samaDengan = document.kalkulator.calc.value;
    document.kalkulator.calc.value = eval(samaDengan);
}