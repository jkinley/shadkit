import Hero from '@/registry/blocks/hero/hero';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main-layout/blocks/hero')({
  component: HeroDemo
});

function HeroDemo() {
  return <Hero />;
}
