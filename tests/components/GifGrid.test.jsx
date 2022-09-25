
import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid' 
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en la componente GifGrid', () => { 

    const category = 'Beyoncé';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
       // screen.debug();
     })


    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 
        
        const images = [
            {
                id: 'abc',
                title: 'Beyoncé',
                url: 'https://jenesaispop.com/wp-content/uploads/2022/08/beyonce-renaissance-2-1-696x696.jpg',
            },
            {
                id: '1223',
                title: 'Beyoncé',
                url: 'https://jenesaispop.com/wp-content/uploads/2022/08/beyonce-renaissance-2-1-696x696.jpg',
            }
        ];

        useFetchGifs.mockReturnValue( {
            images,
            isLoading: false,
        });
        
        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2)
       // screen.debug();
    })

 })