import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AllChirpsProps { }

export interface AllChirpsState {
    chirps: { id: string, user: string, text: string }[];
}

class AllChirps extends React.Component<AllChirpsProps, AllChirpsState> {
    constructor(props: AllChirpsProps) {
        super(props); 
            this.state = {
                chirps: [],
            };
        }

        async componentWillMount() {
            let res = await fetch('/api/chirps');
            let data = await res.json();
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    text: data[key].text,
                }
            })
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps })
        }

        render() {
            return (
                <>
                    <div className="col-md-9">
                        {this.state.chirps.map(chirp => {
                            return (
                                <div key={chirp.id} className="card p-2 m-3 shadow">
                                    <div className="card-body">
                                        <h4 className="card-title">{chirp.user}</h4>
                                        <p className="card-text">{chirp.text}</p>
                                    </div>
                                    <div className="text-right">
                                        <Link className="btn btn-blueCh" to={`/${chirp.id}/admin`}>Options</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            );

        }
    }


    export default AllChirps;
