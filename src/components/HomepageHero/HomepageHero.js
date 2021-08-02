import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHero.module.css';
import SearchBar from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/index.js';

export default function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.hero__title)}>
          ¿Cómo podemos ayudarte hoy?
        </h1>
        <p className={clsx(styles.hero__subtitle)}>
          Obtén respuestas rápidas a las preguntas más frecuentes <br></br>
          sobre cómo configurar tu tienda de Tienda Negocio.
        </p>
        <div className="searchBar">
          <SearchBar>
          </SearchBar>
        </div>
      </div>
    </header>
  );
}