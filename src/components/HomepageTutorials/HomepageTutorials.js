import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTutorials.module.css';
import Link from '@docusaurus/Link';

const TutorialList = [
  {
    title: 'Configuraciones',
    id: '#configuraciones',
    items: [
      {
        title: 'Productos',
        href: '/tutoriales/productos/administrar-producto',
        Svg: require('/static/img/home/icon-tag.svg').default,
        description: (
          <>
            Administrá y personalizá tus productos y servicios de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Clientes',
        href: '/tutoriales/clientes/clientes',
        Svg: require('/static/img/home/icon-users.svg').default,
        description: (
          <>
            Gestioná tu listado de clientes y las consultas de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Ventas',
        href: '/tutoriales/ventas/ventas-realizadas',
        Svg: require('/static/img/home/icon-dolar.svg').default,
        description: (
          <>
            Administrá las ventas y carritos abandonados de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Configuraciones',
        href: '/',
        Svg: require('/static/img/home/icon-cogs.svg').default,
        description: (
          <>
            Administrar de manera simple y personalizada
            tu tienda online.
          </>
        ),
      }
    ]
  },
  {
    title: 'Gestión de ventas',
    id: '#gestion-de-ventas',
    items: [
      {
        title: 'Productos',
        href: '/tutoriales/productos/administrar-producto',
        Svg: require('/static/img/home/icon-tag.svg').default,
        description: (
          <>
            Administrá y personalizá tus productos y servicios de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Clientes',
        href: '/tutoriales/clientes/clientes',
        Svg: require('/static/img/home/icon-users.svg').default,
        description: (
          <>
            Gestioná tu listado de clientes y las consultas de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Ventas',
        href: '/tutoriales/ventas/ventas-realizadas',
        Svg: require('/static/img/home/icon-dolar.svg').default,
        description: (
          <>
            Administrá las ventas y carritos abandonados de tu tienda online profesional.
          </>
        ),
      },
      {
        title: 'Configuraciones',
        href: '/',
        Svg: require('/static/img/home/icon-cogs.svg').default,
        description: (
          <>
            Administrar de manera simple y personalizada
            tu tienda online.
          </>
        ),
      }
    ]
  }
];

function Tutorial({Svg, title, description, href}) {
  return (
    <Link to={href}>
      <div className={styles.card}>
        <div className="text--center">
          <Svg className={styles.TutorialSvg} alt={title} />
        </div>
        <div className="text--center">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

function Section({id, title, items}) {
  return (
    <section id={id} className={styles.Tutorials}>
      <div className="container">
        <h2 className={styles.tutorialTitle}>
          {title}
        </h2>
        <div className={styles.grid}>
          {items.map((props, idx) => (
            <Tutorial key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>    
  )
}

export default function HomepageTutorials() {
  return (
    <>
      {
        TutorialList.map((props, idx) => (
          <Section key={idx} {...props}/>
        ))
      }
    </>
  );
}
