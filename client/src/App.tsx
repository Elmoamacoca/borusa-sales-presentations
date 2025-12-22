import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLogin from "./pages/DashboardLogin";
import Dashboard from "./pages/Dashboard";
import PresentationWrapper from "./pages/PresentationWrapper";
import { useEffect } from "react";
import { preloadImages } from "./components/OptimizedImage";

// Lista de todas as imagens usadas nas apresentações para precarregar
const PRESENTATION_IMAGES = [
  "/investimento-oil.jpg",
  "/investimento2-store.jpg",
  "/investimento3-office2000.png",
  "/investimento4-negative.png",
  "/otimizacao-tempo-new.png",
  "/momento-ai-future.png",
  "/assets/borusa-logo.png",
  "/assets/gabriel-torres.png",
  "/assets/hydranet-tesla.png",
  "/images/garantia-certificado.png",
  "/images/whatsapp-group.png",
];

function Router() {
  return (
    <Switch>
      {/* Redireciona raiz para dashboard */}
      <Route path="/">
        {() => <Redirect to="/dashboard" />}
      </Route>
      
      {/* Rotas do Dashboard */}
      <Route path="/dashboard" component={DashboardLogin} />
      <Route path="/dashboard/home" component={Dashboard} />
      
      {/* Rotas das Apresentações */}
      <Route path="/p/:slug" component={PresentationWrapper} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  // Precarregar todas as imagens das apresentações quando o app inicia
  useEffect(() => {
    // Precarrega as imagens em background após o app carregar
    const timer = setTimeout(() => {
      preloadImages(PRESENTATION_IMAGES).catch(console.error);
    }, 1000); // Aguarda 1 segundo para não competir com recursos críticos

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
