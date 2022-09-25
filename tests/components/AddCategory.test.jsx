

import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en la componente <AddCategory/>', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Beyoncé' } } )

        expect( input.value ).toBe('Beyoncé')
       // screen.debug();
     });



     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
      
        const inputValue = 'Beyoncé';
        const onNewCategory = jest.fn(); // mock simulación de la función

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Beyoncé' } } )
        fireEvent.submit( form );

        expect( input.value ).toBe('')

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
        
       // screen.debug();
     });


     test('No debe de llamar el onNewCategory si el input está vació ', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');        
        fireEvent.submit( form );
  
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
       // screen.debug();
     });



 })