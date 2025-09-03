import { CheckCircle2, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const achievements = [
    "Consultora licenciada certificada",
    "Especialista em planejamento financeiro",
    "Mais de 5 anos de experiência",
    "Abordagem personalizada e humanizada"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Sobre a consultora"
                className="w-full h-[500px] object-cover rounded-3xl shadow-luxury"
              />
              {/* Floating testimonial card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-luxury border border-gray-100 max-w-xs"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  "Transformou completamente minha relação com o dinheiro."
                </p>
                <div className="text-xs font-medium text-gray-500">— Cliente satisfeita</div>
              </motion.div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-green-200/20 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
                Sobre <span className="gradient-text font-medium">mim</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sou consultora licenciada e <strong className="text-gray-900">apaixonada</strong> por 
                  ajudar pessoas a conquistarem estabilidade e independência financeira.
                </p>
                <p>
                  Acredito que cada pessoa tem uma história única, e é por isso que desenvolvi um 
                  método de consultoria que combina <em className="text-amber-700">técnica</em> com 
                  <em className="text-green-600"> humanização</em>.
                </p>
                <p>
                  Meu objetivo é simples: tornar o mundo financeiro menos intimidador 
                  e mais acessível para você.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 text-lg text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
