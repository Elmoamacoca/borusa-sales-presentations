import { Slide } from '@/components/presentation/Slide';

export default function IntroSlide() {
  return (
    <Slide className="text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Introdução</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          [Conteúdo da introdução aqui]
        </p>
      </div>
    </Slide>
  );
}
