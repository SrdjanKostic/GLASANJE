function Klik() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            if (checkedOne) {
                alert("MISLIO SI NAS DA PREVARIŠ ? MOŽEŠ DA GLASAŠ ZA SMO JEDNOG KANDIDATA I AKO NASTAVIŠ DA KRŠIŠ PRAVILA BIĆEŠ PROCESUIRAN !!!");
                checkboxes[i].checked = false;
                return false;
            }
            checkedOne = true;
        }
    }

    if (!checkedOne) {
        alert("MORAŠ DA GLASAŠ ZA JEDNOG OD KANDIDATA, NEMA NEUTRALNIH !!!");
        return false;
    }

      //KRAJ
    alert("NADAM SE DA STE DOBRO IZABRALI.");
    //window.location.href = "KRAJ.html";
    //window.close();
    document.getElementById("forma").style.display = "none"; 
    document.getElementById("naslov").innerText = "GLASANJE JE ZAVRŠENO";
}