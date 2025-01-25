function adcNovoRegistro() {
   ativaOpacidade();

   let modalRegistro = document.querySelector('.modal-registro');

   modalRegistro.style.display = 'block';
}

function esconderNovoRegistro() {
   let modalRegistro = document.querySelector('.modal-registro');
   let valor = document.querySelector('#valor');
   valor.value = '';

   modalRegistro.style.display = 'none';
   desativaOpacidade();
}

function adcNovoLancamento() {
   let lancamentos = document.querySelector('.lancamentos')
   
   let valor = document.querySelector('#valor').value;
   const receita = document.getElementById("tipo-entrada-receita");
   const despesa = document.getElementById("tipo-entrada-despesa");
   let tipoLancamento = "";

   if (receita.checked) {
      tipoLancamento = "Receita";
   } else if (despesa.checked) {
      tipoLancamento = "Despesa";
   }

   lancamentos.innerHTML += `         
      <div class="lancamento" style="border-left: 5px solid ${tipoLancamento === "Receita" ? "green" : "red"}">
         <div>
            <p class="label-lancamento-valor padding inline">Valor: </p> <span>${valor}</span>
         </div>
         <div>
            <p class="label-lancamento-tipo padding inline">Tipo: </p> <span>${tipoLancamento}</span>
         </div>
         <div>
            <p class="label-lancamento-data padding inline">Data: </p> <span>${pegarDataAtual()}</span>
         </div>
      </div>`;

   let labelLancamentoValor = document.querySelector('.label-lancamento-valor');
   let labelLancamentoTipo = document.querySelector('.label-lancamento-tipo');
   let labelLancamentoData = document.querySelector('.label-lancamento-data');

   esconderNovoRegistro();
}

function pegarDataAtual() {
   const data = new Date();

   const dia = String(data.getDate()).padStart(2, '0');
   const mes = String(data.getMonth() + 1).padStart(2, '0');
   const ano = data.getFullYear();

   const dataFormatada = `${dia}/${mes}/${ano}`;
   return dataFormatada;
}

function ativaOpacidade() {
   let opacidade = document.querySelector('.opacidade');

   opacidade.style.display = 'block';
}

function desativaOpacidade() {
   let opacidade = document.querySelector('.opacidade');

   opacidade.style.display = 'none';
}