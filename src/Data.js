import React, { Component } from "react";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";

let currentPage = 1;
export default class Data extends Component {
  state = {
    TableHeader: ["Cover", "Title", "Episodes", "Score", "Rated"],
    Data: [],
    isLoading: false,
    LastPage: 0,
  };
  getData = async () => {
    this.setState({ isLoading: true });
    let res = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=Naruto&page=" +
        currentPage +
        "&limit=10"
    );
    let Data = await res.json();
    if (res.status === 200) {
      this.setState({ Data: Data.results, LastPage: Data.last_page });
    } else {
      console.log("error Occured");
    }
    this.setState({ isLoading: false });
    console.log(Data);
  };

  pagination = (name) => {
    if (name === "increment") {
      currentPage += 1;
      this.getData();
    } else if (name === "decrement") {
      currentPage -= 1;
      this.getData();
    }
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { TableHeader, Data, LastPage, isLoading } = this.state;
    return (
      <div className="data-container">
        <Header />
        {isLoading ? (
          <p className="loading">Loading....Please Wait</p>
        ) : (
          <table>
            <caption>Anime Data</caption>
            <thead>
              <tr>
                {TableHeader.map((item, index) => (
                  <th key={index + 2} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Data.map((item, index) => (
                <tr key={item.mal_id}>
                  <td data-label="Cover">
                    <img src={item.image_url} alt="url" className="cover" />
                  </td>
                  <td data-label="Title">{item.title}</td>
                  <td data-label="Episodes">{item.episodes}</td>
                  <td data-label="Score">{item.score}</td>
                  <td data-label="Rated">{item.rated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Pagination
          currentPage={currentPage}
          lastPage={LastPage}
          nextPage={() => this.pagination("increment")}
          prevPage={() => this.pagination("decrement")}
        />
      </div>
    );
  }
}
