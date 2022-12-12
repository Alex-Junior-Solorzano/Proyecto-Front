import Footer from "./Footer";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


describe('Testeando el componente Footer', () => {
    it('Testeando si el componente renderiza', () => {
        render(<Footer />);
    });
});