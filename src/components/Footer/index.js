import React from 'react';

import { FooterContent } from './styles';
import LuizaCode from '../../assets/images/logo-h-sm.png'

function Footer(){
  const dateNow = new Date();
  return(
    <>
      <div className="mt-20" />
      <div className="multi-colors"/>
      <FooterContent>
        <div className="content">
          <img src={LuizaCode} alt="Logo do Grupo" />
          <p>Este é um projeto acadêmico desevolvido na Luiza Labs | { dateNow.getFullYear() } © Todos os direitos reservados.</p>
          <p>LuizaLabs {'&'} GamaAcademy.</p>
        </div>
      </FooterContent>
    </>
  )
}

export default Footer