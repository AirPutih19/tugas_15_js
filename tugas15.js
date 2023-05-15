var ab = 8;
console.log('Nilai AB :',ab)
var bc = 6;
console.log('Nilai BC :',bc)

function AC(){

   var hasil = Math.pow(bc,2)+Math.pow(ab,2);
   console.log('panjang sisi AC pada segitiga siku siku tersebut adalah',Math.sqrt(hasil),'cm')
    
}
AC()