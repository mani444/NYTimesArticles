// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import useSWR from 'swr';
import { fetchData } from '../../lib/utils';
import { within } from '@testing-library/react';

jest.mock('swr', () => jest.fn());
jest.mock('../../lib/utils', () => ({
  fetchData: jest.fn(),
  cn: jest.fn((...classes) => classes.join(' ')),
}));

const mockData = {
  results: [
    {
      title: 'Test Article',
      byline: 'Test Author',
      updated: '2023-04-01',
      abstract: 'Test Abstract',
      media: [{ 'media-metadata': [{}, {}, { url: 'test_image_url.jpg' }] }],
      url: 'http://testarticle.com',
    },
  ],
};

describe('ArticleCard', () => {
  beforeEach(() => {
    fetchData.mockReset();
  });
  it('renders loading state', () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: undefined }));
    render(<ArticleCard />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: true }));
    render(<ArticleCard />);
    expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
  });

  it('renders articles correctly after successful data fetch', async () => {
    useSWR.mockImplementation(() => ({ data: mockData, error: undefined }));
    render(<ArticleCard />);
    await waitFor(() => expect(screen.getByText(/Test Article/i)).toBeInTheDocument());
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Test Article/i })).toHaveAttribute('src', 'test_image_url.jpg');
  });

  it('toggles expand/collapse on click', async () => {
    useSWR.mockImplementation(() => ({ data: mockData, error: undefined }));
    render(<ArticleCard />);
    const readMoreButton = await screen.findByText(/Read More/i);
    fireEvent.click(readMoreButton);
    expect(await screen.findByText(/Show Less/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Show Less'));
    expect(await screen.findByText(/Read More/i)).toBeInTheDocument();
  });

  it('mocks API call correctly', async () => {
    fetchData.mockResolvedValue(mockData);
    useSWR.mockImplementation((url) => ({ data: fetchData(url), error: undefined }));
    render(<ArticleCard />);
    await waitFor(() => expect(fetchData).toHaveBeenCalledWith(expect.any(String)));
    const articleContainer = screen.getByText(/NewYork Times/i).closest('.container');
    const textElement = within(articleContainer).getByText(/NewYork Times/i);
    expect(textElement).toBeInTheDocument();
  });

});