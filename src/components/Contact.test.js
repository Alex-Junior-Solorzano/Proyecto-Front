import Contact from "./Contact";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


describe('Testeando el componente Contact', () => {
    it('Testeando si el componente renderiza', () => {
        render(<Contact />);
    });

    it('Testeando el titlulo', () => {
        render(<Contact />);
        expect(screen.getByRole('heading')).toHaveTextContent(
            'Contact US'
        )
    });

    it('Testeando un boton', () => {
        render(<Contact />);
        expect(screen.getByRole('button')).toBeInTheDocument()
    });

    it('Testeando un boton Submit', () => {
        render(<Contact />);
        expect(screen.getByRole('button')).toHaveTextContent('Submit')
    });

    it('Testeando con fireEvent', () => {
        render(<Contact />);
        const b =screen.getByRole('button')
        fireEvent.click(b)
        expect(screen.getByRole('heading')).toHaveTextContent(
            'Contact US'
        )
    });
});