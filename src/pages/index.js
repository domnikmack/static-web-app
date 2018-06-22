import React from 'react';
import Container from '../components/container';
import styles from './index.module.css';
console.log(styles);

export default () => (
  <Container>
    <div>
      <h1>Hello world!</h1>
      <h2>Eiusmod ex amet</h2>
      <p>
        Esse nulla esse ipsum consequat in ex commodo. Incididunt sunt
        reprehenderit voluptate voluptate consectetur. Qui dolor ea deserunt
        dolore labore sint ullamco duis velit commodo. Deserunt minim do sit
        eiusmod ullamco officia veniam quis. Ea nulla duis sunt{' '}
        <a href="#">eiusmod</a>.
      </p>
      <blockquote>
        Excepteur tempor non ea ullamco ex ea labore elit duis mollit sint.
      </blockquote>
      <p>
        Id fugiat cupidatat adipisicing consequat pariatur sit cillum. Dolor
        reprehenderit ex fugiat nostrud eu. Anim sunt ut nulla voluptate. Non do
        laboris laboris commodo ad tempor fugiat labore ut laboris non.
        Consectetur nostrud ea cupidatat est cillum eiusmod velit. Aliquip sint
        velit consectetur nostrud ullamco labore laboris sunt deserunt nisi
        mollit sit ut cupidatat.
      </p>
      <Item
        name="Project One"
        imgUrl="https://source.unsplash.com/collection/190727/600x300"
        description="Dolore consequat labore veniam do. Ad consequat quis sit irure. In sit excepteur ex do. Proident ex mollit nostrud aliquip ad aliquip duis quis nulla enim cillum. Aliqua qui et do voluptate minim eu in. Minim non ut est labore aute aliqua sint aute dolor. Incididunt laboris anim Lorem anim qui enim adipisicing ullamco qui Lorem quis exercitation."
      />
      <Item
        name="Project Two"
        imgUrl="https://source.unsplash.com/collection/190727/600x300"
        description="Dolore consequat labore veniam do. Ad consequat quis sit irure. In sit excepteur ex do. Proident ex mollit nostrud aliquip ad aliquip duis quis nulla enim cillum. Aliqua qui et do voluptate minim eu in. Minim non ut est labore aute aliqua sint aute dolor. Incididunt laboris anim Lorem anim qui enim adipisicing ullamco qui Lorem quis exercitation."
      />
    </div>
  </Container>
);


const Item = props =>
  <div className={styles.item} >
    <h2>{props.name}</h2>
    <img src={props.imgUrl} />
    <p>{props.description}</p>
  </div>

// 923414
