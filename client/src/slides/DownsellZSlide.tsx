import { Slide } from '@/components/presentation/Slide';

export default function DownsellZSlide() {
  return (
    <Slide className="text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Plano Essencial</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          [Conteúdo do downsell Z - Plano para começar pequeno]
        </p>
        <p className="text-2xl font-bold text-primary">R$ 9.000 + R$ 800/mês</p>
      </div>
    </Slide>
  );
}
