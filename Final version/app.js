// Simple form validation with feedback
const form = document.getElementById('signupForm');

function showError(fieldId, message) {
  const err = document.querySelector(`[data-error-for="${fieldId}"]`);
  if (err) err.textContent = message || '';
}

function validateEmail(email) {
  // Simple regex for general format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  let valid = true;

  if (!name) { showError('name', 'Please enter your full name.'); valid = false; }
  else { showError('name', ''); }

  if (!email) { showError('email', 'Please enter your email.'); valid = false; }
  else if (!validateEmail(email)) { showError('email', 'Invalid email.'); valid = false; }
  else { showError('email', ''); }

  if (!password) { showError('password', 'Please enter your password.'); valid = false; }
  else if (password.length < 6) { showError('password', 'Minimum of 6 characters.'); valid = false; }
  else { showError('password', ''); }

  if (!valid) return;

  // Simulate submission
  form.querySelector('.btn--primary').disabled = true;
  form.querySelector('.btn--primary').textContent = 'Creating...';

  setTimeout(() => {
    alert('Account successfully created! (demo)');
    form.reset();
    form.querySelector('.btn--primary').disabled = false;
    form.querySelector('.btn--primary').textContent = 'Create my account';
  }, 800);
});

// Theme toggle
const toggleThemeBtn = document.getElementById('toggleTheme');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  toggleThemeBtn.textContent = isLight ? '🌙 Dark Mode' : '🌞 Light Mode';
});

// Translations
const translations = {
  "pt-BR": {
    hero: "A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.",
    title: "Comece agora grátis",
    name: "Nome completo",
    email: "E-mail",
    password: "Senha",
    button: "Criar minha conta",
    legal: "Ao clicar em “criar minha conta grátis”, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.",
    login: "Já tenho conta. Fazer login"
  },
  "en-US": {
    hero: "The platform for you to learn from experts, master the main technologies, and enter the most desired companies faster.",
    title: "Start now for free",
    name: "Full name",
    email: "Email",
    password: "Password",
    button: "Create my account",
    legal: "By clicking 'create my free account', I declare that I accept DIO's Privacy Policies and Terms of Use.",
    login: "Already have an account? Log in"
  },
  "es-ES": {
    hero: "La plataforma para aprender de expertos, dominar las principales tecnologías y entrar más rápido en las empresas más deseadas.",
    title: "Empieza ahora gratis",
    name: "Nombre completo",
    email: "Correo electrónico",
    password: "Contraseña",
    button: "Crear mi cuenta",
    legal: "Al hacer clic en 'crear mi cuenta gratis', declaro que acepto las Políticas de Privacidad y los Términos de Uso de DIO.",
    login: "Ya tengo cuenta. Iniciar sesión"
  }
};

const languageSelect = document.getElementById('languageSelect');

languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  const t = translations[lang];

  document.querySelector('.hero__title').textContent = t.hero;
  document.querySelector('.card__title').textContent = t.title;
  document.querySelector('label[for="name"]').textContent = t.name;
  document.querySelector('label[for="email"]').textContent = t.email;
  document.querySelector('label[for="password"]').textContent = t.password;
  document.querySelector('.btn--primary').textContent = t.button;
  document.querySelector('.legal').textContent = t.legal;
  document.querySelector('.signin').textContent = t.login;
});
.