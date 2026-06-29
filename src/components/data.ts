import {
  FiFileText,
  FiMessageCircle,
  FiSmartphone,
  FiClock,
  FiLock,
  FiCreditCard,
  FiShield,
  FiCheckCircle,
  FiDroplet,
  FiActivity,
  FiClipboard,
  FiUserPlus,
  FiMail,
  FiVideo,
} from 'react-icons/fi';
import {
  HiOutlineHeart,
  HiOutlineScale,
  HiOutlineBan,
} from 'react-icons/hi';

type Item = { icon: any; title: string; desc: string };

export const PRIMARY = '#1A2942';

// Imagens do hero (carrossel) — arquivos locais em /public/images/hero
export const HERO_IMAGES = [
  '/images/hero/hero-1.webp',
  '/images/hero/hero-2.webp',
  '/images/hero/hero-3.webp',
  '/images/hero/hero-4.webp',
  '/images/hero/hero-5.webp',
];

export const benefits: Item[] = [
  {
    icon: FiFileText,
    title: 'Prescrição Digital de Medicamentos e Exames',
    desc: 'Receba prescrições e solicitações de exames validados por Profissionais de saúde habilitados diretamente no seu celular, com rapidez e total segurança.',
  },
  {
    icon: FiMessageCircle,
    title: 'Consultas Ilimitadas',
    desc: 'Fale com médicos quantas vezes precisar, a qualquer hora, sem custo adicional e com acompanhamento contínuo.',
  },
];

export const securityFeatures: Item[] = [
  { icon: FiSmartphone, title: 'Fácil de Usar', desc: 'Interface simples e intuitiva. Agende sua consulta em poucos cliques.' },
  { icon: FiClock, title: 'Atendimento Rápido', desc: 'Sem filas de espera. Conecte-se com um médico em minutos.' },
  { icon: FiLock, title: 'Dados Protegidos', desc: 'Suas informações médicas são criptografadas e totalmente seguras.' },
  { icon: FiCreditCard, title: 'Pagamento Seguro', desc: 'Processamento de pagamento com as melhores tecnologias do mercado.' },
];

export const seals = [
  { icon: FiLock, label: 'SSL Seguro' },
  { icon: FiShield, label: 'Compra 100% Segura' },
  { icon: FiCheckCircle, label: 'Dados Protegidos' },
  { icon: FiCreditCard, label: 'Pagamento Criptografado' },
];

export const programs: Item[] = [
  { icon: FiDroplet, title: 'Diabetes Mellitus', desc: 'Monitoramento glicêmico e orientação nutricional contínua.' },
  { icon: FiActivity, title: 'Hipertensão Arterial', desc: 'Controle da pressão com acompanhamento médico regular.' },
  { icon: HiOutlineScale, title: 'Obesidade', desc: 'Programa de emagrecimento saudável com nutricionista.' },
  { icon: HiOutlineBan, title: 'Tabagismo', desc: 'Suporte para cessação do tabagismo com apoio clínico.' },
  { icon: HiOutlineHeart, title: 'Saúde Emocional', desc: 'Apoio psicológico e cuidado com a saúde mental.' },
];

export const steps: { n: string; icon: any; title: string; desc: string }[] = [
  { n: '01', icon: FiClipboard, title: 'Escolha seu plano', desc: 'Selecione a modalidade ideal — individual, familiar, empresarial ou consulta única.' },
  { n: '02', icon: FiUserPlus, title: 'Cadastre-se em minutos', desc: 'Informe seus dados e finalize o pagamento com rapidez.' },
  { n: '03', icon: FiMail, title: 'Receba o acesso imediato', desc: 'Você recebe no e-mail todas as informações de login.' },
  { n: '04', icon: FiVideo, title: 'Consulte quando quiser', desc: 'Fale com um médico em até 10 minutos, 24 horas por dia.' },
];

export const testimonials = [
  { initials: 'MS', name: 'Maria Silva', role: 'Mãe de 3 filhos', text: 'Incrível! Consegui atendimento para minha filha às 2h da manhã. O médico foi super atencioso e enviou a receita na hora. Recomendo demais!' },
  { initials: 'CO', name: 'Carlos Oliveira', role: 'Empresário', text: 'Implementei o plano corporativo na minha empresa e os colaboradores adoraram. Reduziu as faltas e aumentou a satisfação do time.' },
  { initials: 'AC', name: 'Ana Paula Costa', role: 'Professora', text: 'Praticidade é a palavra! Não preciso mais pegar fila no posto de saúde. Faço tudo pelo celular e recebo atestado quando preciso.' },
];

export const stats = [
  { v: '+2 milhões', l: 'Pacientes atendidos' },
  { v: '50.000+', l: 'Consultas realizadas' },
  { v: '4.9', l: 'Avaliação média' },
  { v: '98%', l: 'Clientes satisfeitos' },
  { v: '24/7', l: 'Atendimento' },
];

export const faqs = [
  { q: 'Como funciona o atendimento médico por telemedicina?', a: 'Você assina um plano, faz seu cadastro e em até 10 minutos pode falar com um médico por vídeo chamada, 24 horas por dia, todos os dias.' },
  { q: 'Em quais horários posso ser atendido?', a: 'Atendimento 24 horas por dia, 7 dias por semana, inclusive feriados. Médicos disponíveis a qualquer momento.' },
  { q: 'Preciso de algum equipamento específico para realizar a consulta?', a: 'Apenas um celular ou computador com câmera, microfone e conexão à internet. A consulta é feita pelo navegador, sem instalar aplicativos.' },
  { q: 'As consultas, receitas e atestados têm validade legal?', a: 'Sim. Todas as prescrições e atestados são emitidos por médicos com CRM ativo e possuem validade legal em todo o Brasil.' },
];
