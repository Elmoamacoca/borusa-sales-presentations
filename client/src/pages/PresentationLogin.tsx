import { useState } from 'react';
import { usePresentationAuth } from '@/hooks/usePresentationAuth';
import { getPresentationBySlug } from '@/config/presentations.config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BackgroundShader from '@/components/BackgroundShader';
import { Lock } from 'lucide-react';

interface PresentationLoginProps {
  slug: string;
  onSuccess: () => void;
}

export default function PresentationLogin({ slug, onSuccess }: PresentationLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = usePresentationAuth(slug);
  const presentation = getPresentationBySlug(slug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(password)) {
      onSuccess();
    } else {
      setError('Senha incorreta');
      setPassword('');
    }
  };

  if (!presentation) {
    return (
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <BackgroundShader />
        <Card className="w-full max-w-md relative z-10">
          <CardHeader className="text-center">
            <CardTitle>Apresentação não encontrada</CardTitle>
            <CardDescription>
              A apresentação que você está tentando acessar não existe.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <BackgroundShader />
      
      <Card className="w-full max-w-md relative z-10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">{presentation.title}</CardTitle>
          <CardDescription>
            {presentation.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Senha da Apresentação</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                autoFocus
                required
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full">
              Acessar Apresentação
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
