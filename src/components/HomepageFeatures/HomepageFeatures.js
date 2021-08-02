import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Productos',
    id: '#configuraciones',
    Svg: require('/static/img/home/add-product.svg').default,
    description: (
      <>
        Administrá y personalizá tus productos y servicios de tu tienda online profesional.
      </>
    ),
  },
  {
    title: 'Clientes',
    id: '#configuraciones',
    Svg: require('/static/img/home/dashboard.svg').default,
    description: (
      <>
        Gestioná tu listado de clientes y las consultas de tu tienda online profesional.
      </>
    ),
  },
  {
    title: 'Ventas',
    id: '#gestion-de-ventas',
    Svg: require('/static/img/home/transaction.svg').default,
    description: (
      <>
        Administrá las ventas y carritos abandonados de tu tienda online profesional.
      </>
    ),
  },
  {
    title: 'Configuraciones',
    id: '#configuraciones',
    Svg: require('/static/img/home/configuracion.svg').default,
    description: (
      <>
        Administrar de manera simple y personalizada
        tu tienda online.
      </>
    ),
  },
  
];


function scrollTutorial(id){
  let top = document.getElementById(id).offsetTop;
  window.scrollTo({
    'top': top - 100,
    'behavior': 'smooth'
  })
}

function Feature({Svg, title, description, id}) {
  return (
    <div className={styles.card} onClick={()=>{scrollTutorial(id)}}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>    
  );
}
