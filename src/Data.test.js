import Data from "./Data";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./../utils";
import React from "react";
import {
  cleanup,
  getByText,
  render,
  getByTestId,
} from "@testing-library/react";
import { getData } from "./services/Services";
import moxios from "moxios";
import { BrowserRouter as Router } from "react-router-dom";

const setUp = (initialState = {}) => {
  const wrapper = shallow(<Data {...initialState} />);
  return wrapper;
};

describe("Data Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "dataComponent");
    expect(component.length).toBe(1);
  });

  //   it("Show loading text", () => {
  //     // const component = findByTestAtrr(wrapper, "loadingComponent");
  //     const { getByText } = render(
  //       <Router>
  //         <Data />
  //       </Router>
  //     );
  //     expect(getByText(/loading/i)).toBeInTheDocument();
  //     // expect(component.length).toBe(1);
  //     cleanup();
  //   });

  it("display response data", () => {
    const component = findByTestAtrr(wrapper, "tableComponent");
    expect(component.length).toBe(1);
    // cleanup();
  });

  it("Show loading text", () => {
    const { container } = render(
      <Router>
        <Data />
      </Router>
    );
    const countValue = getByTestId(container, "loadingComponent");
    expect(countValue.textContent).toBe("Loading ....Please Wait");

    // const countText = getByTestId(container, "countvalue");
    // const text = wrapperr.find(".search").text();
    // console.log(text.length);
    // expect(text).toEqual("Naruto");
  });

  it("Fetching post", async () => {
    const expectedState = [
      {
        mal_id: 20,
        url: "https://myanimelist.net/anime/20/Naruto",
        image_url:
          "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        title: "Naruto",
        airing: false,
        synopsis:
          "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        type: "TV",
        episodes: 220,
        score: 7.95,
        start_date: "2002-10-03T00:00:00+00:00",
        end_date: "2007-02-08T00:00:00+00:00",
        members: 2229434,
        rated: "PG-13",
      },
      {
        mal_id: 1735,
        url: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
        image_url:
          "https://cdn.myanimelist.net/images/anime/5/17407.jpg?s=2bf24a22a339223dcadb1cdfc3307b61",
        title: "Naruto: Shippuuden",
        airing: false,
        synopsis:
          "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the myster...",
        type: "TV",
        episodes: 500,
        score: 8.21,
        start_date: "2007-02-15T00:00:00+00:00",
        end_date: "2017-03-23T00:00:00+00:00",
        members: 1874729,
        rated: "PG-13",
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    const result = await getData(
      "https://api.jikan.moe/v3/search/anime?q=Naruto&page=1&limit=10"
    );
    expect(result).toBe(expectedState);
  });

  it("Checking state", () => {
    console.log(wrapper.state("isLoading"));
  });
});
