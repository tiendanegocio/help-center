import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import HomepageHero from '../components/HomepageHero/HomepageHero';
import HomepageTutorials from '../components/HomepageTutorials/HomepageTutorials';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Centro de Ayuda | ${siteConfig.title}`}
      description="Obtén respuestas rápidas a las preguntas más frecuentes
      sobre cómo configurar tu tienda de Tienda Negocio. <head />">
        <main>
          <HomepageHero />
          <HomepageFeatures />
          <HomepageTutorials />
        </main>
    </Layout>
  );
}
