import React from 'react';
import { Header } from './header';
import { Content } from './content';

export const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name}></Header>
      <Content parts={course.parts}></Content>
    </>
  );
};
