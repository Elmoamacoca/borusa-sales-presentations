import { Slide } from '@/components/presentation/Slide';
import { Button } from '@/components/ui/button';

export default function ClosingSlide() {
  return (
    <Slide className="text-center">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold">Vamos Começar?</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          [Conteúdo de fechamento e call-to-action aqui]
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="text-lg px-8 py-6">
            Contratar Agora
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Agendar Reunião
          </Button>
        </div>
      </div>
    </Slide>
  );
}
