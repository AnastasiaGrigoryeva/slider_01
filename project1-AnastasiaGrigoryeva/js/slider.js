let images = [{
    url: "./img/image 2.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    url: "./img/image2,2.jpg",
    title: "Sochi Thieves"
  }, {
    url: "./img/image2,3.jpg",
    title: "Rostov-on-Don Patriotic"
  }
];


function initSlider() {

  if (!images || !images.length) return; //если нет картинки , то автоматически выйдет из функции

  let sliderImages = document.querySelector('.section2_image');
  let sliderArrows = document.querySelector('.section2_arrow');
  let sliderDots = document.querySelector('.section2-dots');
  let sliderTitle = document.querySelector('.nav-section2');
  

  initImages();
  initArrows();
  initDots();
  initTitle();
  
  
  function initImages() {
    images.forEach((image , index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
     //вставляем див , далее выбераем image , если актив ,то первое, а если нет , то строка / Дата атрибут индекс
     sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".section2_arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
  });
  
  }
    
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active") //убирает точку с первого и передает ее далее
    })
    })
  }

  function initTitle() {
    images.forEach((image , index) => {
      let titles = `<div class="nav-section2-item n${index} ${index === 0? "active" : ""}" data-index="${index}">Rostov-on-Don Patriotic</div>`;
      sliderTitle.innerHTML += titles;
    });
    sliderTitle.querySelectorAll(".nav-section2-item").forEach(titles => {
      titles.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderTitle.querySelector(".active").classList.remove("active");
        this.classList.add("active") //убирает точку с первого и передает ее далее
    })
    })
    

  }

 

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active"); //убираем active статус
    sliderImages.querySelector(".n" + num).classList.add("active"); // добавляем active следующий картинке
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTitle.querySelector(".active").classList.remove("active");
    sliderTitle.querySelector(".n" + num).classList.add("active");
          
  }

}

document.addEventListener("DOMContentLoaded", initSlider);

