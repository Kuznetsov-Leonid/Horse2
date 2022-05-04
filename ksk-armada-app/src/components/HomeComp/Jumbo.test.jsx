import { render, screen } from '@testing-library/react';
import { 
    JumboPrise,  
    JumboEducationHorseRide, 
    JumboHorseRide, 
    JumboHoldUpWithHorse, 
    JumboPhotoWithHorse 
    } from './Jumbotrone';

describe('Jumbotrone components', () => {
    //Простой рендер компонентов
    it('JumboPrise render', () => {
        render(<JumboPrise />);
        expect(screen.queryByRole('JumboPrise')).toBeNull();
    });
    
    it('JumboEducationHorseRide render', () => {
        render(<JumboEducationHorseRide />);
        expect(screen.queryByRole('JumboEducationHorseRide')).toBeNull();
    });

    it('JumboHorseRide render', () => {
        render(<JumboHorseRide />);
        expect(screen.queryByRole('JumboHorseRide')).toBeNull();
    });

    it('JumboHoldUpWithHorse render', () => {
        render(<JumboHoldUpWithHorse />);
        expect(screen.queryByRole('JumboHoldUpWithHorse')).toBeNull();
    });

    it('JumboPhotoWithHorse render', () => {
        render(<JumboPhotoWithHorse />);
        expect(screen.queryByRole('JumboPhotoWithHorse')).toBeNull();
    });
});

describe('Jumbotrone snapshot', () => {
    it('JumboPrise snapshot', () => {
        const JumboPriseSnap = render(<JumboPrise />);
        expect(JumboPriseSnap).toMatchSnapshot();
    });

    it('JumboEducationHorseRide snapshot', () => {
        const JumboEducationHorseRideSnap = render(<JumboEducationHorseRide />);
        expect(JumboEducationHorseRideSnap).toMatchSnapshot();
    });

    it('JumboHorseRide snapshot', () => {
        const JumboHorseRideSnap = render(<JumboHorseRide />);
        expect(JumboHorseRideSnap).toMatchSnapshot();
    });

    it('JumboHoldUpWithHorse snapshot', () => {
        const JumboHoldUpWithHorseSnap = render(<JumboHoldUpWithHorse />);
        expect(JumboHoldUpWithHorseSnap).toMatchSnapshot();
    });

    it('JumboPhotoWithHorse snapshot', () => {
        const JumboPhotoWithHorseSnap = render(<JumboPhotoWithHorse />);
        expect(JumboPhotoWithHorseSnap).toMatchSnapshot();
    });
});


