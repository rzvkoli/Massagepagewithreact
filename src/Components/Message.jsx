import React from 'react';
import './Message.css';
import {faker} from '@faker-js/faker';

export default function Message(props) {

  const randomAvatar = faker.image.avatar();
  const randomName = faker.name.firstName();
  const randomNumber = faker.datatype.number({min : 1 , max : 24});

  return (
    <div className='message'>
      <div className='point'></div>
      <div className='profile'>
        <img className='avatar' src={randomAvatar} alt='avatar' />
      </div>
      
      <div className='data'>
        <h3 className='author'>{randomName}</h3>
        <p className='message-txt'>{props.comment}</p>
        <p className='history'>{randomNumber}{props.time}</p>
      </div>
  
    </div>
  );
}
