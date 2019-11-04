var inputLength = document.getElementById('length'),
  inputWidth = document.getElementById('width'),
  inputHeight = document.getElementById('height'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var length = inputLength.value || 0,
    width = inputWidth.value || 0,
    height = inputHeight.value || 0,
    result = 0;

    result = length * width * height;
    elementResult.innerText = result;
    e.preventDefault();
}, false);