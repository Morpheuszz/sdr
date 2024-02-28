var dict = {
    '11897' : "Quantas",
    '98767' : "Diretorias",
    '56432' : "A Empresa",
    "78967": "Medicina",
    "13456" : "Júnior",
    '78656' : "Possui",
    "44562": "Quando",
    "90437": "Será",
    "77790": "O Evento",
    "00010": "Med",
    "22222": "Júnior",
    "65482": "Day"
};

function codigos() {
    let r = document.getElementById("codigo").value;
    let texto = "";
    let n = 0;
    if(r != ""){
        if(r in dict) {
            texto = dict[r];
        }
        else {
            texto = "Código Incorreto!"
        }
    }
    document.getElementById("palavra").innerHTML = texto;
}