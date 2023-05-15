import { render, screen } from "@testing-library/react"
import { PostCard } from "../PostCard"
import { postCardPropsMock } from "./mock"

const props = postCardPropsMock

describe('<PostCard/>', () => {
    it('should render PostCard correctly', () => {
       render(<PostCard {...props}/>);

        expect(screen.getByAltText(/Titulo teste/i)).toHaveAttribute('src', 'img.img.png');
        expect(screen.getByRole('heading', {name: 'Titulo teste 1'})).toBeInTheDocument();
        expect(screen.getByText('Body teste')).toBeInTheDocument();

        expect.assertions(3)

    })

    it('should match snapshot', () => {
        const {container} = render(<PostCard {...props}/>);
 
         expect(container.firstChild).toMatchSnapshot();
     })
})