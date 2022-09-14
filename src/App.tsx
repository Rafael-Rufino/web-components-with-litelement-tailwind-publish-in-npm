import React from 'react'
import './App.css'
import './litelements/pushbutton-element'
import './components/button-app'
import './components/input-app'
import { Heading } from './components/heading-app'
import './components/alert.js'
import { PeopleApp } from './components/people/people-app'
import { createComponent } from '@lit-labs/react'

const HeadingA = createComponent(React, 'heading-app', Heading)
const PeopleAppA = createComponent(React, 'people-app', PeopleApp)

function App() {
  return (
    <div className="App">
      <div className="Content">
        <HeadingA title="aa" description={'sdasd'} />
        <PeopleAppA
          props={[
            {
              name: 'Person 1',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
              email: '1@test.com',
              title: 'Official title',
              color: '84b22f',
            },
            {
              name: 'Person 2',
              image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
              email: '2@test.com',
              title: 'Official title',
              color: '674b1b',
            },
            {
              name: 'Person 3',
              image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200',
              email: '3@test.com',
              title: '',
              color: 'a2a5dc',
            },
            {
              name: 'Person 4',
              image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200',
              email: '4@test.com',
              title: 'Official title',
              color: '9e3997',
            },
          ]}
        />
        {/* <br/>
        <input-app/>
        <input-app/>
        <br />
        <button-app/>  */}
      </div>
    </div>
  )
}

export default App
