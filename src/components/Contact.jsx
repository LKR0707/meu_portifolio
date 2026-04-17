import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="contact">
      <div className="section-header">
        <h2>Contato</h2>
        <p>Quer conversar? Me manda uma mensagem!</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <span>kelvis@email.com</span>
          </div>
          <div className="contact-item">
            <span>🐙</span>
            <a href="https://github.com/LKR0707" target="_blank" rel="noreferrer">
              github.com/LKR0707
            </a>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <span>Brasil</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {sent && (
            <div className="form-success">✅ Mensagem enviada com sucesso!</div>
          )}
          <div className="form-group">
            <label>Nome</label>
            <input
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Mensagem</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Sua mensagem..."
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
