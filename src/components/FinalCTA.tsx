import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero transformar minha vida financeira.";
  const emailLink = "mailto:contato@consultoriafinanceira.com";
  const phoneLink = "tel:+5511999999999";

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-light leading-tight">
              Pronto para transformar
              <br />
              <span className="font-medium bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
                sua vida financeira?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Não deixe para amanhã a segurança que você pode conquistar hoje. 
              Vamos começar sua jornada rumo à independência financeira.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="h-16 px-10 text-xl font-medium rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 group transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                Quero minha consulta
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-gray-600"></div>
              <span className="text-gray-400">ou</span>
              <div className="w-px h-8 bg-gray-600"></div>
            </div>
            <div className="flex gap-4">
              <a href={phoneLink} className="group">
                <div className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
              </a>
              <a href={emailLink} className="group">
                <div className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
