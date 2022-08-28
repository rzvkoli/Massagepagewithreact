import React from 'react';
import Message from './Message';
import './MessagesPage.css';


export default function MessagesPage(props) {
  return (
    <div className='messages-page'>
      <header>
        <h1 className='title'>Notifications</h1>
        <p className='txt'>You have<span> 5 Notifications </span>today .</p>
        <h2 className='day'>Today</h2>
      </header>
      <div className='main'>
        <Message comment='Hi rzvkoli' time=' minutes ago'/>
        <Message comment='How are you?' time=' minutes ago'/>
        <Message comment='I sold my car' time=' hours ago'/>
        <Message comment='Hi 🙂' time=' hours ago'/>
        <Message comment='Bye' time=' hours ago'/>
      </div>
    </div>
  );
}
