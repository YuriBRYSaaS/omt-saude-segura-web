
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using a service like EmailJS or a custom backend
      // In this example we'll use a dummy fetch to simulate sending email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c4d09973-2184-4969-8d54-6d97c51edb08", // Would need a real access key in production
          subject: `Nova mensagem de contato de ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          to: "contato@omtmedicinadotrabalho.com.br",
          message: `
            Nome: ${formData.name}
            Email: ${formData.email}
            Telefone: ${formData.phone}
            Empresa: ${formData.company}
            
            Mensagem:
            ${formData.message}
          `,
        }),
      });
      
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da sua empresa"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Como podemos ajudar sua empresa?"
          className="h-32"
          required
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        Ao enviar este formulário, você concorda com nossa política de privacidade.
      </p>
    </form>
  );
};

export default ContactForm;
