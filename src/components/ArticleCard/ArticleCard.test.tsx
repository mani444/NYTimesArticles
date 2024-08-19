// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import { BrowserRouter as Router } from "react-router-dom";

const mockArticle = {
  title: "Test Article",
  byline: "Test Author",
  updated: "2023-04-01",
  abstract: "Test Abstract",
  media: [{ "media-metadata": [{}, {}, { url: "test_image_url.jpg" }] }],
  url: "http://testarticle.com",
};

describe("ArticleCard", () => {
  it("renders article data correctly", () => {
    render(
      <Router>
        <ArticleCard article={mockArticle} index={0} />
      </Router>
    );
    expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Test Article/i })).toHaveAttribute(
      "src",
      "test_image_url.jpg"
    );
  });

  it("toggles expand/collapse on click", async () => {
    render(
      <Router>
        <ArticleCard article={mockArticle} index={0} />
      </Router>
    );
    const readMoreButton = screen.getByText(/Read More/i);
    fireEvent.click(readMoreButton);
    expect(screen.getByText(/Show Less/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText("Show Less"));
    expect(screen.getByText(/Read More/i)).toBeInTheDocument();
  });
});
