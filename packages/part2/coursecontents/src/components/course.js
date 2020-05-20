import React from 'react';
import { Header } from './header';
import { Content } from './content';
import { Total } from './total';

export const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};
