---
title: "ChatFlow"
description: "Application de chat en temps réel avec support des canaux, messagerie directe et partage de médias."
techStack:
  - "Vue.js"
  - "Node.js"
  - "Socket.io"
  - "MongoDB"
logo: "ChatFlowLogo"
link:
  href: "https://chatflow.example.com"
  ariaLabel: "Voir ChatFlow"
  ariaDescribedBy: "Ouvre le site du projet"
---

## À propos du projet

ChatFlow est né du besoin d'avoir une solution de communication interne auto-hébergée et sécurisée. L'objectif principal était de réduire la latence des messages tout en assurant la persistance des données.

### Défis techniques

L'un des plus grands défis a été la **gestion de la mise à l'échelle des WebSockets**. Nous avons dû implémenter un adaptateur Redis pour Socket.io afin de permettre la diffusion d'événements entre plusieurs instances de serveurs Node.js.

### Fonctionnalités clés
*   Canaux publics et privés
*   Partage de fichiers par glisser-déposer
*   Aperçus de liens enrichis