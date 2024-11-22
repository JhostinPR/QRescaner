const readerElement = document.getElementById('reader');
const scanBtn = document.getElementById('scan-btn');
const stopBtn = document.getElementById('stop-btn');
const scanResult = document.getElementById('scan-result');

function onScanSuccess(decodedText, decodedResult) {
  scanResult.innerHTML = `Datos del QR: ${decodedText}`;
  html5QrcodeScanner.clear();
  readerElement.style.display = 'none';
  scanBtn.style.display = 'block';
  stopBtn.style.display = 'none';
}

function onScanFailure(error) {
  console.warn(`Error de escaneo: ${error}`);
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 });

scanBtn.addEventListener('click', () => {
  readerElement.style.display = 'block';
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  scanBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  scanResult.innerHTML = "Escanea un código QR";
});

stopBtn.addEventListener('click', () => {
  html5QrcodeScanner.clear();
  readerElement.style.display = 'none';
  scanBtn.style.display = 'block';
  stopBtn.style.display = 'none';
  scanResult.innerHTML = "Escaneo detenido";
});
