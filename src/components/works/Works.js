/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Portfolio',
      description: `J'ai dev une page portfolio
      avec des animations 3D en three.js pour le
      fond d'écran dynamique. Il permet de me presenter rapidement et de mettre en valeur mes travaux`,
      alter: ' Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Service d\'authentification',
      description: `Un formulaire de connexion simple permettant l'accès à l'intranet de l'IUT au personnel du corps enseignant enregistré dans la base de données grâce au CAS et se connecter à un service lié.
      Grâce à l'algorithme de cryptographie asymétrique RSA, les données sont entièrement chiffrées de bout en bout.`,
      alter: 'CAS',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Pinpin OS',
      description: `Le but de ce projet est de faire et de distribuer un systeme d'exploitation open source basé sur debian qui tournerai sur la switch. Le projet est build a partir du projet L4T. Le principal interet etant de faire tourner des jeux steam sur un processeur ARM. Le projet est pour le moment en phase de test .`,
      alter: 'Projet pinpinOS',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'LaCalle Cafe', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
