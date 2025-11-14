---
title: 'El gancho para abrir/cerrar modales afecta a todos los modales de la página'
slug: el-gancho-para-abrircerrar-modales-afecta-a-todos-los-modales-de-la-pagina
status: PUBLISHED
createdAt: 2025-11-14T19:21:37.579Z
updatedAt: 2025-11-14T19:21:37.579Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: openclose-modal-hook-affects-all-modals-on-the-page
locale: es
kiStatus: Backlog
internalReference: 1042165
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al abrir/cerrar un modal la acción afecta a todos los modales de la página


#### Simulación


Prueba a abrir un modal en una página con más de uno
Busca los otros modales, verás que el comportamiento será el mismo

## Workaround


Puedes usar un estado personalizado en lugar del nativo. Aquí tienes un ejemplo:

     import { useState } from "react";import { Modal, ModalHeader, ModalBody, LinkButton, Icon } from "@faststore/ui";import ModalContent from "./ModalContent";import section from "./styles.module.scss";const ModalSelector = () => {const [showModal, setShowModal] = useState(false);const ToggleModal = () => {setShowModal((showModal) => !showModal);};return (} > Entrega {showModal && ( <> )});};export default ModalSelector;



