import { render, screen } from '@testing-library/react';
import Carusel from './Carusel';

describe('Carusel component', () => {
    render(<Carusel />);
    expect(screen.queryByRole('Carusel')).toBeNull();
});

describe('Carusel snapshot', () => {
    it('Carusel snapshot', () => {
        const CaruselSnap = render(<Carusel />);
        expect(CaruselSnap).toMatchSnapshot();
    });
});