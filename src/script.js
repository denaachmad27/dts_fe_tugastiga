function convert() {
    var input = document.getElementById("suhu1").value;
    var hasil = (input -32) * (5/9);
    document.getElementById("suhu2").value = hasil;
}