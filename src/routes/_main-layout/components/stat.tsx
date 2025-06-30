import { stats } from '@/data/stats';
import { StatList, Stat, StatTitle, StatValue, StatDescription } from '@/registry/ui/stat';
import { createFileRoute } from '@tanstack/react-router';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const Route = createFileRoute('/_main-layout/components/stat')({
  component: StatDemo
});

function StatDemo() {
  return (
    <section>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Stat</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae reprehenderit deleniti nihil
          eum atque temporibus tenetur illum magnam minima beatae, quis neque amet dolor molestiae tempora officiis
          architecto quia.
        </p>

        <StatList className="grid grid-cols-3 gap-4 mb-4">
          {stats.map((stat) => (
            <Stat key={stat.title}>
              <StatTitle>{stat.title}</StatTitle>
              <StatValue>{stat.value}</StatValue>
              <StatDescription className="flex gap-2 justify-center items-center">
                {stat.icon === 'TrendingUp' && <TrendingUp className="size-4" />}
                {stat.icon === 'TrendingDown' && <TrendingDown className="size-4" />}
                {stat.description}
              </StatDescription>
            </Stat>
          ))}
        </StatList>
      </div>
    </section>
  );
}
