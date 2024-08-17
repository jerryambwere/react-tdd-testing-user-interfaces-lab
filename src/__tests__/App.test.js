import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _____`", ()=>{
    //Arrange
    render(<App/>)
    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    //Assert
    expect(topLevelHeading).toBeInTheDocument()
})

test("displays my profile image", ()=>{

    render(<App/>)
    const image = screen.getByAltText("My profile")

    expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");

})

test("displays a second heading level with the text `About me`", ()=>{
    //Arrange
    render(<App/>)
    //Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    })
    //Assert
    expect(secondLevelHeading).toBeInTheDocument()
})

test("displays a paragraph for your biography", () => {
    render(<App />);
  
    const bio = screen.getByText(/this is everything about me/i);
  
    expect(bio).toBeInTheDocument();
  });

  test("displays the correct links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com")
    );
  
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://linkedin.com")
    );
  });