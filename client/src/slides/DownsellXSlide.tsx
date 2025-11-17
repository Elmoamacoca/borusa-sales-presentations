import { Slide } from '@/components/presentation/Slide';

export default function DownsellXSlide() {
  return (
    <Slide className="text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Plano Velocidade</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          [Conteúdo do downsell X - Foco em velocidade de implementação]
        </p>
        <p className="text-2xl font-bold text-primary">R$ 15.000 + R$ 1.200/mês</p>
      </div>
    </Slide>
  );
}
