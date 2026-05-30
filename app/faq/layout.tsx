import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | HidroBaby Spa - FAQ Completo',
  description: 'Todas las preguntas frecuentes sobre spa post vacunas, hidromasaje, fisioterapia infantil, precios y más. 20 respuestas detalladas.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}