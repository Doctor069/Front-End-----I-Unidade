// ================================================
// Script Principal (index.js)
// ================================================

// --- LÓGICA INTELIGENTE PARA A BARRA LATERAL ---
const toggleBtn = document.querySelector('.ocutar-barra-lateral');
const lateral = document.getElementById('lateral');
const conteudo = document.getElementById('conteudo');

if (toggleBtn && lateral) {
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (window.innerWidth <= 1024) {
      lateral.classList.toggle('aberta');
    } else {
      lateral.classList.toggle('retraido');
      if (conteudo) {
        conteudo.classList.toggle('expandido');
      }
    }
  });
}

// --- LÓGICA PARA ATIVAR ITENS DAS LISTAS (permite múltiplos) ---
document.querySelectorAll('.lista-tarefas li, .lista-exercicios li, .lista-do-usuario li').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('ativo');
  });
});

// --- LÓGICA PARA EXIBIR A DATA ATUAL (só na home) ---
const dataEl = document.querySelector('.data');
if (dataEl) {
  const hoje = new Date();
  dataEl.textContent = hoje.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  });
}

// --- LÓGICA PARA OS ÍCONES DE ATIVIDADE (permite múltiplos) ---
const atividades = document.querySelectorAll('#lista_atividades .atividade');
if (atividades.length > 0) {
    atividades.forEach(atividade => {
        atividade.addEventListener('click', function(event) {
            event.preventDefault(); 
            this.classList.toggle('ativo');
        });
    });
}


/* --- NOVO: Script para ajustar o espaçamento da barra lateral dinamicamente --- */
function ajustarPaddingLateral() {
    const header = document.getElementById('header');
    const lateral = document.getElementById('lateral');

    if (header && lateral) {
        // Mede a altura atual do header
        const headerHeight = header.offsetHeight;

        // Em telas menores, o padding-top da barra lateral deve ser igual à altura do header
        if (window.innerWidth <= 1024) {
            lateral.style.paddingTop = `${headerHeight}px`;
        } else {
            // Em telas maiores, volta ao padding original definido no CSS
            lateral.style.paddingTop = '20px';
        }
    }
}

// Executa a função quando a página carrega e quando a janela muda de tamanho/zoom
window.addEventListener('load', ajustarPaddingLateral);
window.addEventListener('resize', ajustarPaddingLateral);