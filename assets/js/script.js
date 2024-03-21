//variavel que seleciona todas as bolinhas dos sliders
let pointerSlider = document.querySelectorAll(".point_slider");

//variavel responsavel pela largura total da area dos sliders pegando todos os sliders
let totalSlides = document.querySelectorAll(".slider").length;

//instancia um valor no css para largura da area dos sliders
document.querySelector(".sliders").style.width = `calc(100vw * ${totalSlides}`;

//constante que armazena o valor do item checkbox
const checkbox = document.getElementById("checkbox");

//constante armazena componente 
const switcher = document.querySelector(".switcher");

//variavel que define o slide atual
let currentSlide = 0;

//instancia o primeiro slider com a classe ativada
pointerSlider.item(0).classList.add("active");

//adiciona o click e sua função ao sol e a lua para mudar o modo visual
switcher.addEventListener("click", () => {
  if (checkbox.checked) {
    switcher.setAttribute("data-themes", "night");
    document.body.style.setProperty("background-color", "var(--night--color)");
    document.documentElement.style.setProperty("--text--color", "#fff");
  } else {
    switcher.setAttribute("data-themes", "day");
    document.body.style.setProperty("background-color", "var(--day--color)");
    document.documentElement.style.setProperty("--text--color", "#141c3a");
  }
});

//loop que adiciona o click e sua função as bolinhas do sliders para passar o slider
pointerSlider.forEach((item) => {
  item.addEventListener("click", () => {
    goSlider(parseInt(item.getAttribute("id")));
  });
});

//função para para chama o slider clicado
function goSlider(slide) {
  currentSlide = slide;

  updateMargin();
}

//função que passa os slider automaticamente
function goNextCopilit() {
  currentSlide++;

  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

//função que atualiza o slide atual na tela
function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider").clientWidth;
  pointerSlider.forEach((item) => {
    if (parseInt(item.getAttribute("id")) != currentSlide) {
      item.classList.remove("active");
    }
  });

  pointerSlider.item(currentSlide).classList.add("active");

  let newMargin = currentSlide * sliderItemWidth;

  document.querySelector(".sliders").style.marginLeft = `-${newMargin}px`;
}

//time que executa a cada 9segundo a função de passar slider automaticamente
setInterval(goNextCopilit, 9000);

//comando para quando a pagina sofre um carregamento ela atualizar o slider
window.onload=updateMargin;
