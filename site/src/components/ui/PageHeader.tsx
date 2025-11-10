import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="py-16 bg-bg-secondary border-b border-gray-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-text-secondary mb-6">
              {subtitle}
            </p>
          )}
          {children && <div className="flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
