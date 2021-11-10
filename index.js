const slideDiv = document.querySelector('#slide');
const imgList = [...slideDiv.children];

const delay = ms => new Promise(res => setTimeout(res, ms));

const slide = async () => {
  for (let i = 0; i < 5; i++) {
    if (i === 4) {
      i = 0;
      imgList[3].style.display = 'none';
    }
    if (i === 0) {
      imgList[i].style.display = 'block';
      await delay(1000);
    }
    else {
      imgList[i].style.display = 'block';
      imgList[i - 1].style.display = 'none';
      await delay(1000);
    }
  }
}

slide();