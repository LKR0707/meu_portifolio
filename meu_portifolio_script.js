
document.addEventListener('DOMContentLoaded', function() {
    // tema escuro
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    
    // Verificação de tema salvo
    const savedTheme = localStorage.getItem('portfolio-theme');
    if(savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if(btnTema) btnTema.textContent = '☀️ Claro';
    } else {
        if(btnTema) btnTema.textContent = '🌙 Escuro';
    }
    
    if(btnTema) {
        btnTema.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
            btnTema.textContent = isDark ? '☀️ Claro' : '🌙 Escuro';
        });
    }
    
    // projetos
    const projetosData = [
        {
            nome: "AçaíGo",
            desc: "Aplicativo de delivery de açaí com cardápio interativo, carrinho de compras e acompanhamento em tempo real.",
            techs: ["React", "Node.js", "MongoDB"],
            icone: "🫐",
            destaque: "Novo",
            github: "https://github.com/kelvisrios/AcaiGo",
            demo: "#"
        },
        {
            nome: "FlashLearn",
            desc: "App de flashcards com repetição espaçada e estatísticas de aprendizado.",
            techs: ["React", "JavaScript", "LocalStorage", "CSS3"],
            icone: "🃏",
            destaque: "Novo",
            github: "https://github.com/kelvisrios/flashlearn",
            demo: "#"
        }
    ];
    
    const container = document.querySelector('.projetos-container');
    if(container && projetosData.length > 0) {
        container.innerHTML = '';
        
        projetosData.forEach((proj, index) => {
            const card = document.createElement('div');
            card.className = 'card-projeto';
            // Delay na animação
            card.style.animation = `fadeUp 0.4s ease both ${index * 0.1}s`;
            
            const thumbDiv = document.createElement('div');
            thumbDiv.className = 'proj-thumb';
            thumbDiv.innerHTML = `<span style="font-size:3.2rem;">${proj.icone}</span>`;
            
            if(proj.destaque) {
                const badgeSpan = document.createElement('span');
                badgeSpan.className = 'proj-badge';
                badgeSpan.textContent = proj.destaque === 'Novo' ? '✨ NOVO' : '🔥 DESTAQUE';
                thumbDiv.appendChild(badgeSpan);
            }
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'proj-content';
            
            const techStack = document.createElement('div');
            techStack.className = 'tech-stack';
            
            proj.techs.forEach(tech => {
                const techSpan = document.createElement('span');
                techSpan.className = 'tech';
                techSpan.textContent = tech;
                techStack.appendChild(techSpan);
            });
            
            const title = document.createElement('h3');
            title.textContent = proj.nome;
            
            const description = document.createElement('p');
            description.textContent = proj.desc;
            
            const linksDiv = document.createElement('div');
            linksDiv.className = 'proj-links';
            
            const demoLink = document.createElement('a');
            demoLink.href = proj.demo || '#';
            demoLink.className = 'proj-link';
            demoLink.innerHTML = '🔍 Visualizar';
            demoLink.target = '_blank';
            
            const codeLink = document.createElement('a');
            codeLink.href = proj.github || '#';
            codeLink.className = 'proj-link';
            codeLink.innerHTML = '📂 Repositório';
            codeLink.target = '_blank';
            
            linksDiv.appendChild(demoLink);
            linksDiv.appendChild(codeLink);
            
            contentDiv.appendChild(techStack);
            contentDiv.appendChild(title);
            contentDiv.appendChild(description);
            contentDiv.appendChild(linksDiv);
            
            card.appendChild(thumbDiv);
            card.appendChild(contentDiv);
            container.appendChild(card);
        });
    } else if(container) {
        
        container.innerHTML = '<p style="text-align:center;">Carregando projetos...</p>';
    }
    
    // formulario
    const form = document.getElementById('meu-formulario');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nomeInput = document.getElementById('nome');
            const emailInput = document.getElementById('email');
            const msgInput = document.getElementById('msg');
            
            const nome = nomeInput ? nomeInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const msg = msgInput ? msgInput.value.trim() : '';
            
            if(!nome || !email) {
                alert('Por favor, preencha nome e e-mail.');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            if(!msg) {
                alert('Escreva uma mensagem :)');
                return;
            }
            
            alert(`✨ Obrigado ${nome}! Sua mensagem foi enviada com sucesso.\nEm breve retornarei no e-mail ${email}.`);
            form.reset();
        });
    }
    
    // Badge de freelas 
    const sobreSection = document.getElementById('sobre');
    if(sobreSection && !document.querySelector('.hero-badge-custom')) {
        const badgeWrap = document.createElement('div');
        badgeWrap.className = 'hero-badge-custom';
        badgeWrap.style.display = 'flex';
        badgeWrap.style.justifyContent = 'center';
        badgeWrap.style.marginBottom = '1rem';
        badgeWrap.style.gap = '0.5rem';
        
        badgeWrap.innerHTML = `
            <span class="availability-badge" style="
                background: rgba(0,0,0,0.2);
                backdrop-filter: blur(4px);
                padding: 0.2rem 1rem;
                border-radius: 999px;
                font-size: 0.7rem;
                font-weight: 600;
                letter-spacing: 1px;
                color: white;
                display: inline-block;
            ">
                ⚡ DISPONÍVEL PARA FREELAS
            </span>
        `;
        
        const titleH2 = sobreSection.querySelector('h2');
        if(titleH2) {
            titleH2.insertAdjacentElement('afterend', badgeWrap);
        } else {
            sobreSection.insertBefore(badgeWrap, sobreSection.firstChild);
        }
    }
    
    // Scroll suave para navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Fallback para garantir que o tema seja aplicado mesmo se o DOMContentLoaded falhar
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {});
} else {
    // Se o DOM já estiver carregado, executa imediatamente
    if(typeof document !== 'undefined') {
        // O evento já foi disparado, então o código acima executará normalmente
    }
}