import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de uma consulta financeira.";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50/30 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-light leading-tight"
              >
                <span className="text-gray-900">Obrigada por</span>
                <br />
                <span className="gradient-text font-medium">estar aqui!</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl"
              >
                Eu ajudo você a conquistar segurança financeira 
                de forma <em className="text-amber-700 font-medium">prática</em> e <em className="text-green-600 font-medium">humanizada</em>.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="btn-primary h-14 px-8 text-lg font-medium rounded-full shadow-luxury group"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Quero minha consulta
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Consultora licenciada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Atendimento personalizado</span>
              </div>
            </motion.div>
          </motion.div>
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Consultora Financeira Profissional"
                className="w-full h-[600px] object-cover rounded-3xl shadow-luxury"
              />
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-luxury border border-gray-100"
              >
                <div className="text-3xl font-light text-green-600 mb-2">+500</div>
                <div className="text-gray-600 text-sm">Clientes atendidos</div>
              </motion.div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-amber-200/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
