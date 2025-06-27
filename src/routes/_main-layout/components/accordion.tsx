import { createFileRoute } from '@tanstack/react-router';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/ui/accordion';

export const Route = createFileRoute('/_main-layout/components/accordion')({
  component: AccordionDemo
});

function AccordionDemo() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Accordion</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores nihil necessitatibus tenetur
            repellendus consectetur quo non nesciunt ex sunt, repellat quidem excepturi dolores earum alias laboriosam
            saepe molestiae atque.
          </p>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that match the other components&apos;</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
