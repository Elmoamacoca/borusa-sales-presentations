import { useState } from 'react';
import { useLocation } from 'wouter';
import { useDashboardAuth } from '@/hooks/useDashboardAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BackgroundShader from '@/components/BackgroundShader';
import { Lock } from 'lucide-react';

export default function DashboardLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useDashboardAuth();
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(username, password);
    if (success) {
      setLocation('/dashboard/home');
    } else {
      setError('Usuário ou senha incorretos');
      setPassword('');
    }
  };

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
          <CardTitle className="text-2xl">Borusa Solutions</CardTitle>
          <CardDescription>
            Acesse o painel de apresentações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                autoFocus
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full">
              Entrar no Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
