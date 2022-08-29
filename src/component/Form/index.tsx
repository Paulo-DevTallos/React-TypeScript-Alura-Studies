import React from 'react';
import { Button } from '../Button';

export class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <Button />
      </form>       
    )
  }
}