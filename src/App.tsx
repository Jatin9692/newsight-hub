
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SimplifiedInsights from "./pages/SimplifiedInsights";
import Gifts from "./pages/Gifts";
import EducationalFocus from "./pages/EducationalFocus";
import NewsDetail from "./pages/NewsDetail";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/simplified-insights" element={<SimplifiedInsights />} />
              <Route path="/gifts" element={<Gifts />} />
              <Route path="/educational-focus" element={<EducationalFocus />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/news/:category/:slug" element={<NewsDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
