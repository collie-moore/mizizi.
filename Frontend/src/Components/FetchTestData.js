
import React from "react";
import { Alert } from 'reactstrap';

export default class FetchTestData extends React.Component {

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount() {
        const url ="https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
        
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                <div>loading...</div> 
            ) : (
            <div>
                <div>
                   <Alert color="primary">
                        {this.state.person.name.first}
                    </Alert>
                </div>
                <div>
                    <Alert color="secondary">
                        {this.state.person.name.last}
                    </Alert>
                </div>
                <div>
                    <Alert color="success">
                        {this.state.person.name.title}
                    </Alert>
                </div>
                <div>
                    <Alert color="info">
                        <img src={this.state.person.picture.large} alt="image1" />
                    </Alert>
                </div>
                
            </div>
            ) }
        </div>
        );
    }
}