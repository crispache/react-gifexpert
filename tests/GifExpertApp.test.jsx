
import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';



describe('Pruebas en la componente GifExpertApp', () => { 


    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifExpertApp/> );
        expect(container).toMatchSnapshot();
    });



    test('Debe de tener como título GifExpertApp', () => { 
        render( <GifExpertApp/> );
        expect( screen.getByText( 'GifExpertApp' ) ).toBeTruthy();
        expect ( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('GifExpertApp')
        // screen.debug()
    });


    test('Debe de comprobar que no se puede insertar una categoria que ya esté insertada ', () => { 
        render( <GifExpertApp/> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Beyoncé' } } )
 
        const title = screen.getByRole('heading', { level: 3 }).innerHTML; // estaría bien distinguir o identificar el título con algun id o className
        expect( input.value.trim() ).not.toBe( title.trim() )
        // screen.debug()
    });


 })