import { useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { useSecureDashboardAuth } from '@/hooks/useSecureDashboardAuth';
import { 
  presentations, 
  categories, 
  getPresentationsByCategory,
  getStatusLabel,
  getStatusColor,
  getDownsellStatusLabel,
  getDownsellStatusColor
} from '@/config/presentations.config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BackgroundShader from '@/components/BackgroundShader';
import { LogOut, Presentation, DollarSign, Key, ExternalLink, TrendingDown } from 'lucide-react';

export default function Dashboard() {
  const { isAuthenticated, logout } = useSecureDashboardAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/dashboard');
    }
  }, [isAuthenticated, setLocation]);

  const handleLogout = () => {
    logout();
    setLocation('/dashboard');
  };

  if (!isAuthenticated) {
    return null;
  }

  const availableCount = presentations.filter(p => p.status === 'available').length;
  const inProgressCount = presentations.filter(p => p.status === 'in_progress').length;
  const unavailableCount = presentations.filter(p => p.status === 'unavailable').length;

  return (
    <div className="relative min-h-screen">
      <BackgroundShader />
      
      <div className="relative z-10 container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-normal mb-2">Borusa Solutions</h1>
            <p className="text-muted-foreground text-sm">
              Gerencie suas apresentações de vendas
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">
                Total de Apresentações
              </CardTitle>
              <Presentation className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-normal">{presentations.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">
                Disponíveis
              </CardTitle>
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-normal">{availableCount}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">
                Em Criação
              </CardTitle>
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-normal">{inProgressCount}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">
                Indisponíveis
              </CardTitle>
              <div className="h-2 w-2 rounded-full bg-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-normal">{unavailableCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const categoryPresentations = getPresentationsByCategory(category.id);
          
          if (categoryPresentations.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-10">
              <h2 className="text-xl font-normal mb-4">{category.name}</h2>
              
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categoryPresentations.map((presentation) => (
                  <Card 
                    key={presentation.id} 
                    className="hover:border-primary transition-all hover:shadow-lg"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-base font-normal truncate">{presentation.name}</CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`${getStatusColor(presentation.status)} text-xs whitespace-nowrap`}
                        >
                          {getStatusLabel(presentation.status)}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-3 text-sm">
                      {/* Produto */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Produto:</p>
                        <p className="text-sm">{presentation.product}</p>
                      </div>
                      
                      {/* Tickets */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">
                            Ticket Ancoragem:
                          </p>
                          <p className="text-sm text-green-500">
                            R$ {presentation.anchorTicket}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">
                            Ticket Live:
                          </p>
                          <p className="text-sm text-blue-500">
                            R$ {presentation.liveTicket}
                          </p>
                        </div>
                      </div>
                      
                      {/* Downsells */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <TrendingDown className="h-3 w-3 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">
                            Downsells:
                          </p>
                        </div>
                        <ul className="space-y-1">
                          {presentation.downsellProducts.map((downsell, index) => (
                            <li key={index} className="text-xs flex items-center gap-2">
                              <span className="text-muted-foreground">• {downsell.name}</span>
                              <span className={`text-xs font-medium ${getDownsellStatusColor(downsell.status)}`}>
                                ({getDownsellStatusLabel(downsell.status)})
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Credenciais e URL */}
                      <div className="pt-2 border-t space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <Key className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Senha:</span>
                          <code className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">
                            {presentation.password}
                          </code>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs">
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">URL:</span>
                          <code className="px-1.5 py-0.5 bg-muted rounded text-xs flex-1 truncate font-mono">
                            /p/{presentation.slug}
                          </code>
                        </div>
                      </div>

                      {/* Botão de Acesso */}
                      <Link href={`/p/${presentation.slug}`}>
                        <Button 
                          className="w-full mt-2 text-sm h-8" 
                          disabled={presentation.status === 'unavailable'}
                        >
                          {presentation.status === 'unavailable' 
                            ? 'Indisponível' 
                            : 'Acessar'}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
