import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Deep Intelligence',
    icon: '/img/feature_intelligence.png',
    description: (
      <>
        Built-in Semantic Search, AST-based chunking, and Codebase Knowledge Graphs
        allow Exorous to understand your code at a structural level.
      </>
    ),
  },
  {
    title: 'Persistent Memory',
    icon: '/img/feature_memory.png',
    description: (
      <>
        Exorous remembers project conventions, design decisions, and previous
        context across sessions, ensuring consistent and personalized development.
      </>
    ),
  },
  {
    title: 'Safety by Design',
    icon: '/img/feature_safety.png',
    description: (
      <>
        Granular approval policies, dangerous command detection, and path-based
        security keep your codebase safe while maintaining high productivity.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('glass-panel', styles.featureCard)}>
        <div className="text--center">
          <img src={icon} alt={title} className={styles.featureImage} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
