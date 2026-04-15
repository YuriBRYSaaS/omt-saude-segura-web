
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { X } from 'lucide-react';

const PopupConsulta = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Abre o popup após 60 segundos (1 minuto)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 60000);

    // Também abre quando o usuário rolar bastante a página
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviando o email para yurivilela.dev@outlook.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "597d6452-4f80-49af-8ef4-732ed443b90e", // Usando a mesma chave do formulário de contato
          subject: "Solicitação de Guia de Normas Regulamentadoras",
          from_name: "Visitante do Site",
          email: email, // Email do usuário que preencheu o formulário
          to: "contato@omtmedicinadotrabalho.com.br",
          message: `
            Um visitante solicitou o guia de Normas Regulamentadoras.
            
            Email para envio: ${email}
          `,
        }),
      });
      
      toast({
        title: "Solicitação enviada!",
        description: "Seu guia será enviado para o email informado.",
      });
      
      setOpen(false);
      setEmail('');
    } catch (error) {
      toast({
        title: "Erro ao processar solicitação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">Guia Gratuito de Normas Regulamentadoras</DialogTitle>
          <DialogDescription className="text-center">
            Receba nosso guia completo sobre NRs e saiba como manter sua empresa em conformidade.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Guia de Normas Regulamentadoras"
            className="rounded-md mx-auto mb-4 max-h-36 object-cover"
          />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email para receber o guia
              </label>
              <Input
                id="popup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email profissional"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Receber guia gratuito"}
            </Button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-3">
            Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupConsulta;
