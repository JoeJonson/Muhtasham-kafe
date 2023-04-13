// var ism = prompt('Ismingizni kirirtining: ')
// var hozirgiYil = prompt('Hozirgi yilni kiriting: ')
// var tugilganYil = prompt("Tug'ilgan yilingizni kriting: ")
// alert(ism + "sizning yoshingiz" + " " + (hozirgiYil-tugilganYil))


alert("Muhtasham kafesiga hush kelibsiz hurmatli mehmon :)")
var ism = prompt("Ismingizni kriting: ")
alert("Assalomu alaykom " + ism)
var yosh = prompt("Yoshingizni kriting: ")
alert("Hurmatli " + ism + " buyurtma berish uchun taom raqamini kriting")
var taom = prompt("1. Osh, 2. Qozon kabob, 3. Kabob")

if (taom == '1') {
    alert("Hurmatli " + ism + " siz 1. Osh buyurtma qildingiz")
    alert("10 daqiqada buyurtmangiz tayyor bo'ladi!")
}

if (taom == '2') {
    alert("Hurmatli " + ism + "siz 2. Qozon kabob buyurtma qildingiz")
    alert("8 daqiqada buyurtmangiz tayyor bo'ladi!")
}

if (taom == '3') {
    alert("Hurmatli " + ism + "siz 3. Kabob buyurtma qildingiz")
    alert("6 daqiqada buyurtmangiz tayyor bo'ladi!")
}

else {
    alert("Kechirasiz hurmatli mijoz bizning menyuda bunday raqamdagi taom yo'q :(")
    alert("Qaytadan boshlang !")
}

var telRaqam = prompt("Telefon raqamingizni kriting: ")
var tanlov = prompt("Naq pulda to'lasangiz +, kartada to'lasangiz * ni kriting")

if (tanlov == "+") {
    alert("Sizdan jami hsob 50.000 so'm bo'ldi,")
    alert("Taomlarimiz manzur bo'ldi degan umitdamiz")
    alert("Bizni tanlaganingiz uchun rahmat hurmatli mijoz :)")
} else if (tanlov == "*") {
    var card = prompt("Karta raqamingiz: ")
    console.log(card);
}

confirm = ("Siz" + taom + "raqamli taomni tanlaganingizni tasdiqlang")
console.log("Buyurtmachi: " + ism);
console.log("Yoshi: " + yosh);
console.log("Tanlangan taom raqami: " + taom);
console.log("Plastik karta raqami: " + card);
console.log("Buyurtmachining telefon raqami: " + telRaqam);