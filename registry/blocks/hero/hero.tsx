import { Badge } from '@/registry/ui/badge';
import { Button } from '@/registry/ui/button';
import { ArrowUpRight, CirclePlay } from 'lucide-react';

const Hero = () => {
  console.log('BUILDING LATEST HERO');
  return (
    <div className="py-12 grid gap-4 place-items-center">
      <div className="text-center max-w-2xl">
        <Badge className="bg-primary rounded-full py-1 border-none">Just released v1.0.0</Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your
          development workflow with easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="bg-primary rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full text-base shadow-none">
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
