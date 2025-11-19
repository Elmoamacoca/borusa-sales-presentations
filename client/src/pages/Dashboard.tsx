import { useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { useDashboardAuth } from '@/hooks/useDashboardAuth';
import { presentations } from '@/config/presentations.config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BackgroundShader from '@/components/BackgroundShader';
import { LogOut, Presentation, Package, Key, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const { isAuthenticated, logout } = useDashboardAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/');
    }
  }, [isAuthenticated, setLocation]);

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundShader />
      
      <div className="relative z-10 container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 font-sans">Dashboard Borusa</h1>
            <p className="text-muted-foreground">
              Gerencie suas apresentações de vendas
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Apresentações
              </CardTitle>
              <Presentation className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{presentations.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Presentations List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Apresentações Disponíveis</h2>
          
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 max-w-7xl">
            {presentations.map((presentation) => (
              <Card key={presentation.slug} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{presentation.title}</CardTitle>
                    <Badge variant="secondary">{presentation.product.split('-')[0].trim()}</Badge>
                  </div>
                  <CardDescription>{presentation.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Produto:</p>
                        <p className="text-muted-foreground">{presentation.product}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Key className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Senha:</span>
                      <code className="px-2 py-1 bg-muted rounded text-xs">
                        {presentation.password}
                      </code>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">URL:</span>
                      <code className="px-2 py-1 bg-muted rounded text-xs flex-1 truncate">
                        /p/{presentation.slug}
                      </code>
                    </div>
                  </div>

                  <Link href={`/p/${presentation.slug}`}>
                    <Button className="w-full mt-2">
                      Acessar Apresentação
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
