let imgBox = document.getElementById("ImgBox");
let QrImage = document.getElementById("QrImage");
let QrText = document.getElementById("QrText");
let GenerateBtn = document.getElementById("GenerateBtn");
let OptionsBtn = document.getElementById("OptionsBtn");
let DownloadBtn = document.getElementById("DownloadBtn");
let alertDiv = document.getElementById("alertDiv");

// function GenerateQr() {
//     if (!QrText.value) {
//         alert("Input cannot be empty");
//     } else {
//         QrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + QrText.value;
//         GenerateBtn.style.display = "none";
//         OptionsBtn.style.display = "block";
//     }
// }



function GenerateQr() {
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let imgUrl = url + QrText.value;
    const loadScreen = "loading.gif";
    QrImage.setAttribute('src', loadScreen);
    setTimeout(() => {
        GenerateBtn.style.display = "none";
        OptionsBtn.style.display = "block";
        QrImage.setAttribute('src', imgUrl);
    }, 2000);
};




function DownloadQr() {
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let imgUrl = url + QrText.value;

    let randomValue = Math.floor(Math.random() * 10000);

    fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `Myqr${randomValue}.png`;
            link.click();
        });
}

function copyQr() {
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let imgUrl = url + QrText.value;

    fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]);
        });

    
}



function shareQr() {
    alertDiv.style.display = "block";
    navigator.clipboard.writeText(QrText.value);
}

