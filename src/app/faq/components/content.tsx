"use client";

import { motion } from "motion/react";
import { faqCategories } from "./faq.data";
import FAQAccordion from "./faq-accordion";

export const Content = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center text-lg mb-10 text-gray-700 font-fredoka">
        Aquí encontrarás respuestas a las preguntas más comunes sobre nuestras
        tortas, pedidos, entregas y más. Si tienes alguna otra duda, no dudes en
        contactarnos.
      </p>

      <div className="space-y-10">
        {faqCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <h2 className="text-2xl font-medium text-black mb-6 border-b border-burgundy/20 pb-2 font-lustria">
              {category.title}
            </h2>

            <div className="space-y-4 text-black">
              {category.faqs.map((faq, faqIndex) => (
                <FAQAccordion
                  key={faqIndex}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
