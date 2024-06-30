// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ArticleList from "./ArticleList";
import useSWR from "swr";
import { fetchData } from "../../lib/utils";

jest.mock("swr", () => jest.fn());
jest.mock("../../lib/utils", () => ({
  fetchData: jest.fn(),
  cn: jest.fn((...classes) => classes.join(" ")),
}));

const mockData = {
  results: [
    {
      title: "Test Article",
      byline: "Test Author",
      updated: "2023-04-01",
      abstract: "Test Abstract",
      media: [{ "media-metadata": [{}, {}, { url: "test_image_url.jpg" }] }],
      url: "http://testarticle.com",
    },
  ],
};

describe("ArticleList", () => {
  beforeEach(() => {
    fetchData.mockReset();
  });
  it("renders loading state", () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: undefined }));
    render(<ArticleList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    useSWR.mockImplementation(() => ({ data: undefined, error: true }));
    render(<ArticleList />);
    expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
  });

  it("mocks API call correctly", async () => {
    fetchData.mockResolvedValue(mockData);
    useSWR.mockImplementation((url) => ({
      data: fetchData(url),
      error: undefined,
    }));
    render(<ArticleList />);
    await waitFor(() =>
      expect(fetchData).toHaveBeenCalledWith(expect.any(String))
    );
    expect(screen.getByText(/NewYork Times/i)).toBeInTheDocument();
  });

  it("renders articles correctly after successful data fetch", async () => {
    useSWR.mockImplementation(() => ({ data: mockData, error: undefined }));
    render(<ArticleList />);
    await waitFor(() => expect(screen.getByText(/Test Article/i)).toBeInTheDocument());
  });

});
