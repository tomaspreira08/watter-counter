function calcularAgua() {
    var peso = document.getElementById('weight').value;
    
    if (!isNaN(peso) && peso > 0) {
        var quantidadeAgua = peso * 0.35; // Fórmula ajustada

        document.getElementById('result').innerHTML = "Você deve beber aproximadamente " + quantidadeAgua.toFixed(2) + " litros de água por dia.";
    } else {
        document.getElementById('result').innerHTML = "Por favor, insira um peso válido.";
    }
}
