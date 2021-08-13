import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Productos',
    id: '#configuraciones',
    url: '/tutoriales/productos/administrar-producto',
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
    url: '/tutoriales/clientes/clientes',
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
    url: '/tutoriales/ventas/ventas-realizadas',
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
    url: '/tutoriales/configuraciones/general',
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

function changeRoute(url){
  window.location.href = url;
}

function Feature({Svg, title, description, id, url}) {
  return (
    <div className={styles.card} onClick={()=>{changeRoute(url);}}>
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
