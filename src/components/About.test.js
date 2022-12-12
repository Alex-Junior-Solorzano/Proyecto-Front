import About from "./About";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


describe('Testeando el componente About', () => {
    it('Testeando si el componente renderiza', () => {
        render(<About />);
    });

    it('Testeando el titlulo', () => {
        render(<About />);
        const about= screen.getByText('About us: Kruger Star').tagName
    // console.log(about)
     //valor actual

      expect(about).toBe("H1");
    });  
    
    test("Prueba que 1+1 es 2 y no es 3",()=>{
        expect(1+1).toBe(2);
        expect(1+1).not.toBe(3);
    })
});