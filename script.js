const quiz = [
  {
    question: "Qual destas ações contribui diretamente para a preservação do meio ambiente?",
    options: ["Jogar lixo em terrenos baldios", "Queimar resíduos ao ar livre", "Separar o lixo para reciclagem", "Desperdiçar água potável"],
    answer: "Separar o lixo para reciclagem"
  },
  {
    question: "O que podemos entender por consumo consciente?",
    options: ["Comprar tudo o que está em promoção", "Usar produtos sem se importar com os impactos", "Utilizar recursos naturais com responsabilidade", "Descartar objetos usados em qualquer lugar"],
    answer: "Utilizar recursos naturais com responsabilidade"
  },
  {
    question: "Por que a educação no campo é importante para a sustentabilidade?",
    options: ["Para que as crianças não precisem estudar na cidade", "Para valorizar a cultura e práticas sustentáveis do meio rural", "Para ensinar como explorar mais os recursos naturais", "Porque é obrigação do governo"],
    answer: "Para valorizar a cultura e práticas sustentáveis do meio rural"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
  resultEl.textContent = "";
}

function checkAnswer(selected) {
  const correct = quiz[currentQuestion].answer;
  const options = document.querySelectorAll(".option");
  options.forEach(option => {
    option.style.pointerEvents = "none";
    if (option.textContent === correct) {
      option.style.background = "#a5d6a7";
    } else if (option.textContent === selected) {
      option.style.background = "#ef9a9a";
    }
  });
  if (selected === correct) score++;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "Fim do Quiz!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Você acertou ${score} de ${quiz.length} perguntas.`;
}

loadQuestion();
