import { Slide } from '@/components/presentation/Slide';

export default function DownsellYSlide() {
  return (
    <Slide className="text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Plano Custo-Benefício</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          [Conteúdo do downsell Y - Foco em custo-benefício mensal]
        </p>
        <p className="text-2xl font-bold text-primary">R$ 12.000 + R$ 1.000/mês</p>
      </div>
    </Slide>
  );
}
