import React from 'react'

import './App.css'

import { createComponent } from '@lit-labs/react'

import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Button } from './components/Button'
import {LinkIcon} from './components/LinkIcon'
import { CheckText } from './components/CheckText'

import LockImg from './assets/lock.svg'

const HeadingApp = createComponent(React, 'heading-app', Heading)
const InputApp = createComponent(React, 'input-app', Input)
const ButtonApp = createComponent(React, 'button-app', Button)
const LinkIconApp = createComponent(React, 'linkicon-app', LinkIcon)
const CkeckTextApp= createComponent(React, 'checktext-app', CheckText)

function App() {
  return (
    <div className="App">
      <div className="Content">
        <HeadingApp title="Acessando sua conta" description='Informe seu login e senha para continuar' />
        <InputApp label='Seu login' placeholder="E-mail, CPF, Usuário ou Celular" type='text'  onChange={() => {}}/>
        <InputApp label='Sua senha' placeholder="Digite a sua senha"  type='password' onChange={() => {}} />
        <CkeckTextApp name='Manter conectado' />
        <ButtonApp type='submit' name='Acessar sua conta' onClick={()=>{}}/>
        <LinkIconApp src={LockImg} title="Você deseja redefinir a senha ?" href="https://www.gazin.com.br"  name='Esqueceu sua senha?'/>
      </div>
    </div>
  )
}

export default App

{/* <PeopleAppA
  props={[
    {
      name: 'Person 1',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      email: '1@test.com',
      title: 'Official title',
      color: '84b22f',
    },
  ]}
/> */}