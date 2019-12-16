document.addEventListener('DOMContentLoaded', () => {
  const goodName = document.querySelector('.good__name').value;
  const features = Array.from(document.querySelectorAll('.desc')).map(x => x.value);
  const goodPrice = document.querySelector('.input-price').value;

  document.querySelector('.resetBtn').addEventListener('click', () => {
    document.querySelector('.good__name').value = goodName;
    document.querySelectorAll('.desc').forEach((v, i) => v.value = features[i]);
    document.querySelector('.input-price').value = goodPrice;
  });
});