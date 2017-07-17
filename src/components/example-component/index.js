import React from 'react';
import { observer } from 'mobx-react';

let loginName = ''

@observer export default class ExampleComponent extends React.Component {

    render() {
        return (
            <div>
                    <input type='text' label='Name' name='name' />
                    <input type='password' label='Password'  />
            </div>
        );
    }
}
