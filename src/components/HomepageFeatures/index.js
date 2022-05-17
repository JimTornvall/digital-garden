import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Jim Törnvall',
    Png: require('@site/static/img/mintu.png').default,
    description: (
      <>
        Dad of 2.5 trolls 🙈🙉🙊 and 2 ginger monsters 😼😸, belongs to 1 green dragon 🐉.
      </>
    ),
  },
  {
    title: 'Developer in training',
    Png: require('@site/static/img/coding.png').default,
    description: (
      <>
        Currently persuing my Bachelor of Information Technology at
        Åland University of Applied Sciences.
      </>
    ),
  },
  {
    title: 'Data Science Enthusiast',
    Png: require('@site/static/img/bar-chart.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Png, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} style={{ "maxHeight": "200px" }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
