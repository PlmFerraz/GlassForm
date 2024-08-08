checkboxOnChange();
cbEstadosOnChange();
buttonOnClick();
createCircles();

function checkboxOnChange() {
  const checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.onchange = function () {
    const campoTel = document.querySelector('input[type="tel"]');
    campoTel.hidden = !campoTel.hidden;
  };
}

function cbEstadosOnChange() {
  const estado = document.querySelector("#estado");
  estado.onchange = function () {
    const cidades = document.querySelectorAll("select");

    for (let i = 0; i < cidades.length; i++) {
      const cidade = cidades[i];

      if (cidade.id == `estado_${estado.value.toLowerCase()}`) {
        cidade.hidden = false;
      } else {
        if (cidade.id != estado.id) {
          cidade.value = "";
          cidade.hidden = true;
        }
      }
    }
  };
}

function buttonOnClick() {
  const botaoEnviar = document.querySelector("button");
  botaoEnviar.onclick = function () {
    VerifyFields();
  };
}

function VerifyFields() {
  const toastSucesso = document.querySelector(".toast-success");
  const toastErro = document.querySelector(".toast-error");
  const campoNome = document.querySelector('input[placeholder="Nome"]');
  const campoEmail = document.querySelector('input[placeholder="Email"]');

  if (!campoNome.value || !campoEmail.value) {
    toastErro.hidden = false;
    checkErrors(campoNome);
    checkErrors(campoEmail);
    closeToast(toastErro);
  } else {
    toastSucesso.hidden = false;
    checkErrors(campoNome);
    checkErrors(campoEmail);
    closeToast(toastSucesso);
  }
  form.reset();
}

function checkErrors(campo) {
  if (!campo.value) {
    campo.classList.add("erro");
  } else {
    campo.classList.remove("erro");
  }
}

function closeToast(toast) {
  setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

function createCircles() {
  const containerGlass = document.querySelector(".glass");
  const positionBall = 350;
  let topCircle = 0;
  let leftCircle = 0;
  let variety = false;

  for (let i = 0; i < 15; i++) {
    const circle = document.createElement("div");
    circle.classList.add("ball");
    containerGlass.appendChild(circle);
    circle.style.top = `${topCircle}px`;
    circle.style.left = `${leftCircle}px`;

    if (variety) {
      leftCircle += positionBall;
      topCircle -= positionBall * 0.8;
      variety = !variety;
    } else {
      topCircle += positionBall;
      leftCircle -= positionBall * 0.2;
      variety = !variety;
    }
  }
}
