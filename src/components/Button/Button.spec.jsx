const { render, screen, fireEvent } = require("@testing-library/react")
import { Button } from '../Button/index';

describe('<Button/>', () => {
    
    it('should render the button with the text "Load More"', () =>{

        render(<Button text="Load more"/>);

        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i });
        expect(button).toBeInTheDocument();

    })

    it('should call function on button click', () =>{
        const fn = jest.fn();

        render(<Button text="Load more" onClick={fn}/>);

        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i });
        fireEvent.click(button);
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(2);

    })

    it('should be disabled when disabled is true', () =>{

        render(<Button text="Load more" disabled={true}/>);

        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i });
       
        expect(button).toBeDisabled();

    })

    it('should be disabled when disabled is false', () =>{

        render(<Button text="Load more" disabled={false}/>);

        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i });
       
        expect(button).not.toBeDisabled();

    })

    it('should match snapshot', () => {
        const fn = jest.fn();

        render(<Button text="Load more" disabled={false} onClick={fn}/>);
 
         expect(Button).toMatchSnapshot();
     })
})