"use client";
import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Aqui você pode integrar com backend ou serviço de e-mail
      setIsSuccess(true);
      setFormData({ nome: "", email: "", telefone: "", interesse: "" });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-2">Obrigada pelo contato!</h3>
          <p className="text-gray-600">
            Recebi suas informações e entrarei em contato muito em breve.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-green-500" />
            <span className="text-green-600 font-medium uppercase tracking-wider text-sm">
              Vamos conversar
            </span>
            <Sparkles className="w-6 h-6 text-green-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Pronta para <span className="gradient-text font-medium">começar?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Preencha o formulário abaixo e vamos agendar uma conversa personalizada sobre seus objetivos financeiros.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-luxury p-8 max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData.nome}
                onChange={e => handleChange("nome", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData.email}
                onChange={e => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                type="tel"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData.telefone}
                onChange={e => handleChange("telefone", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={formData.interesse}
                onChange={e => handleChange("interesse", e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                <option value="seguro_vida">Seguro de Vida</option>
                <option value="previdencia">Previdência</option>
                <option value="investimentos">Investimentos</option>
                <option value="college">College</option>
                <option value="geral">Geral</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-60"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
