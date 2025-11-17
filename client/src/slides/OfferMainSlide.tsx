import { Slide } from '@/components/presentation/Slide';
import { usePresentationStore } from '@/store/presentationStore';

export default function OfferMainSlide() {
  const { getCurrentSlide } = usePresentationStore();
  const currentSlide = getCurrentSlide();
  const hasConditionalRoutes = currentSlide?.conditionalRoutes;

  return (
    <Slide className="text-center">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold">Nossa Oferta Principal</h1>
        <div className="text-xl text-muted-foreground max-w-3xl mx-auto space-y-4">
          <p>[Conteúdo da oferta principal aqui]</p>
          <p className="text-2xl font-bold text-primary">R$ 20.000 + R$ 1.500/mês</p>
        </div>
        
        {hasConditionalRoutes && (
          <div className="mt-12 p-6 bg-muted/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-2">
              💡 <strong>Atalhos para Downsells:</strong>
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <kbd className="px-3 py-2 bg-background rounded">1</kbd> Plano Velocidade
              <kbd className="px-3 py-2 bg-background rounded">2</kbd> Plano Custo-Benefício
              <kbd className="px-3 py-2 bg-background rounded">3</kbd> Plano Essencial
            </div>
          </div>
        )}
      </div>
    </Slide>
  );
}
