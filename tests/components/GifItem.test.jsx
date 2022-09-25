
import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en GifItem', () => { 

    const data = {
        title: 'Beyoncé',
        url: 'https://jenesaispop.com/wp-content/uploads/2022/08/beyonce-renaissance-2-1-696x696.jpg',
    }

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(<GifItem {...data}/>)
        expect(container).toMatchSnapshot();
    })


    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem {...data}/>)
        /* expect( screen.getByRole('img').src ).toBe( data.url ) */

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( data.url )
        expect( alt ).toBe( data.title )
    })


    test('Debe de mostrar el título en el componente', () => { 
        render(<GifItem {...data}/>)
        expect( screen.getByText( data.title ) ).toBeTruthy();
    })



 })