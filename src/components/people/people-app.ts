// import { LitElement, html } from 'lit-element';
// import {customElement } from 'lit/decorators';
// import { peopleContent } from './content'
import { LitElement, html, customElement, property, css } from 'lit-element'
import './person-card'

@customElement('people-app')
export class PeopleApp extends LitElement {
  // people = [
  //   {
  //     name: 'Person 1',
  //     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
  //     email: '1@test.com',
  //     title: 'Official title',
  //     color: '84b22f',
  //   },
  //   {
  //     name: 'Person 2',
  //     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
  //     email: '2@test.com',
  //     title: 'Official title',
  //     color: '674b1b',
  //   },
  //   {
  //     name: 'Person 3',
  //     image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200',
  //     email: '3@test.com',
  //     title: '',
  //     color: 'a2a5dc',
  //   },
  //   {
  //     name: 'Person 4',
  //     image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200',
  //     email: '4@test.com',
  //     title: 'Official title',
  //     color: '9e3997',
  //   },
  // ]

  @property()
  props!: {name: string, image: string, email: string, title: string, color: string}[]

  onMakeFavourite(event: CustomEvent) {
    console.log('make favourite', event.detail)
  }

  render() {
    console.log('first', this.props)
    return html`
      <h1>List of peoples</h1>
      ${this.props.map(
        person => html`<person-card .person=${person} @makeFavourite=${this.onMakeFavourite}></person-card> `
      )}
    `
  }
}
