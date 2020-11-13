import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            user: "",
            text: ""
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this)

    }

    async componentDidMount() {
        let id = this.props.match.params.id
        try {
            let resChirp = await fetch(`/api/chirps/${id}`);
            let chirp = await resChirp.json();
            this.setState({ user: chirp.user, text: chirp.text })
        } catch (err) {
            console.log(err)
        }
    }

    async handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        let data = {
            user: this.state.user,
            text: this.state.text
        }
        e.preventDefault();
        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            this.props.history.replace('/')
        } catch (err) {
            console.log(err)
        }
    };

    async handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'DELETE'
            });
            this.props.history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <>
                <div className="card col-md-10 border">
                    <div className="card-body">
                        <h3 className="card-tile">{this.state.user}</h3>
                        <div className="mb-3">
                            <label className="mr-2" htmlFor="text">Edit text:</label>
                            <input
                                className="from-control"
                                defaultValue={this.state.text}
                                onChange={this.handleTextChange}
                                type="text" />
                        </div>

                        <div className="text-right">
                            <button className="btn btn-blueCh m-1" onClick={this.handleEdit}>Edit</button>
                            <button className="btn btn-blueCh" onClick={this.handleDelete}>Delete</button>
                        </div>

                    </div>
                </div>
            </>

        );
    }

}

interface IAdminProps extends RouteComponentProps<{ id: string }> { }

interface IAdminState {
    user: string;
    text: string
}

export default Admin;


















