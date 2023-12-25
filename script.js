$(document).ready(function () {
    $("#modal-password").modal("show")
    $("#password").on("keyup", function () {
        if ($(this).val() != "harahas") {
            $(this).addClass("is-invalid");
        } else if ($(this).val() == "harahas") {
            $(this).removeClass("is-invalid");
            $("#audio")[0].play()
            $(this).addClass("is-valid");
            setTimeout(() => {
                $("#modal-password").modal("hide")
                $(this).removeClass("is-valid");
                $(this).val("");
                setTimeout(() => {
                    $(".line").css({
                        "animation": "openScreen 2s ease-out forwards"
                    })
                    $(".line2").css({
                        "animation": "openScreen2 2s ease-out forwards"
                    })
                    setTimeout(() => { typeText() }, 1500)

                }, 700)
            }, 1000)
        }
    })
})


// VANILA
// Teks yang akan ditampilkan
let textToType = "Barokallo Fi Umrik Mii 😉. Semoga di umur yang 23 ini amii makin di kasih kelancaran dalam menjalankan hidupnya di mudahkan segala urusannya, makin berbakti kepada orang tua dan yang paling penting di lancar dan berkahkan rezekinya, Aamiin. Maaf cuma ini yang bisa abii kasih😥";

// Inisialisasi letiabel
let animatedText = document.getElementById('animated-text');
let textIndex = 0;

// Fungsi untuk menambahkan teks satu karakter pada satu waktu
function typeText() {
    if (textIndex < textToType.length) {
        animatedText.textContent += textToType[textIndex];
        textIndex++;

        // Jeda sebelum menambahkan karakter berikutnya
        setTimeout(typeText, 50); // Sesuaikan kecepatan penulisan di sini
    }
}

