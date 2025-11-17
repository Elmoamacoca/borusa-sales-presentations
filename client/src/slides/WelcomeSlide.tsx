import { Slide } from '@/components/presentation/Slide';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { usePresentationStore } from '@/store/presentationStore';

export default function WelcomeSlide() {
  const { goNext } = usePresentationStore();

  return (
    <Slide className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Bem-vindo à
          <br />
          <span className="text-primary">Apresentação BORUSA</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Descubra como podemos transformar seu negócio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-8"
        >
          <Button
            size="lg"
            onClick={goNext}
            className="text-lg px-8 py-6"
          >
            Começar Apresentação
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pt-4"
        >
          <p className="text-sm text-muted-foreground">
            Pressione <kbd className="px-2 py-1 bg-muted rounded text-foreground">Enter ↵</kbd> ou{' '}
            <kbd className="px-2 py-1 bg-muted rounded text-foreground">→</kbd> para avançar
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
