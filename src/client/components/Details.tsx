import * as React from "react";
import { Component } from "react";
import { IChirp } from "../utils/types";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";

class Details extends Component<DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
    super(props);
    this.state = {
      chirp: {
          id: "",
          user: "",
          text: ""
      },
    };
  }
 

  componentDidMount() {
    fetch(`/api/chirps/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((chirp) => this.setState({ chirp }));
  }

  render() {
    return (
      <>
        <div className="col-md-9">
          return (
          <div key={this.state.chirp.id} className="card p-2 m-3 shadow">
            <div className="card-body">
              <h4 className="card-title">{this.state.chirp.user}</h4>
              <p className="card-text">{this.state.chirp.text}</p>
            </div>
            <div className="text-right">
              <Link
                className="btn btn-blueCh"
                to={`/${this.state.chirp.id}/admin`}
              >
                Options
              </Link>
            </div>
          </div>
          )
        </div>
      </>
    );
  }
}

interface DetailsProps extends RouteComponentProps<MatchParams> {}

interface MatchParams {
  id: string;
}

interface DetailsState {
  chirp: IChirp;
}

export default Details;
