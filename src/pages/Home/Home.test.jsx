import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from ".";
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          url: "img.png",
          userId: 1,
          id: 1,
          title: "Title1",
          body: "body1"
        },
        {
          url: "img2.png",
          userId: 2,
          id: 2,
          title: "Title2",
          body: "body2"
        },
        {
          url: "img3.png",
          userId: 3,
          id: 3,
          title: "Title3",
          body: "body3"
        }
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {

  beforeAll(() => {
    server.listen();
  })

  afterEach(() => {
    server.resetHandlers();
  })

  afterAll(() => {
    server.close();
  })

  it('Should render search, posts and load more', async () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    expect.assertions(3)

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/Type your search/i);

    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', /title/i);

    expect(images).toHaveLength(2);

    const button = screen.getByRole('button', /Load More Posts/i);

    expect(button).toBeInTheDocument();
  })

  it('Should search for posts', async () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    expect.assertions(7)

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/Type your search/i);


    expect(screen.getByRole('heading', { name: 'Title1 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Title2 2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Title3 3' })).not.toBeInTheDocument();


    userEvent.type(search, 'Title1')
    expect(screen.getByRole('heading', { name: 'Title1 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Title2 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Title3 3' })).not.toBeInTheDocument();

    userEvent.type(search, 'blabla')
    expect(screen.getByText('Não existem posts =(')).toBeInTheDocument();
  })

  it('Should load more posts', async () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    //expect.assertions(3)

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', /Load More Posts/i);

    userEvent.click(button);
    expect(screen.getByRole('heading', { name: 'Title3 3' })).toBeInTheDocument();
    expect(button).toBeDisabled();
  })

})
