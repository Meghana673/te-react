import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default class AdviceCard extends Component {
  state = { det: [] };

  componentDidMount() {
    axios.get("https://localhost:7020/api/CardDatums").then((res) => {
      const det = res.data;
      this.setState({ det });
    });
  }
  render() {
    return (
      <>
        {this.state.det
          .filter((det) => det.title.includes("S"))
          .map((t) => (
            <div key={t.cid}>
              <h5 className="card-title">{t.title}</h5>
              <p className="card-text">{t.details}</p>
            </div>
          ))}
      </>
    );
  }
}
