import React, { Component } from "react";
import API from "../Utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {

    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.loadDog();
    }

    handleBtnClick = event => {

        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = { ...this.state};

        console.log(newState)


        if (btnType === "pick") {

            newState.match = 1 === Math.floor(Math.random() * 5) + 1;

            newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;


        } else {
            newState.match = false;
        }

        this.setState(newState);
        this.loadDog();
        
    }


    loadDog = () => {
        API.getRandomDog()
            .then(res => this.setState({ image: res.data.message }))
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">Thumbs up on any pups you'd like to meet!</h3>
                <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
                <h1 className="text-center">
                    Made friends with {this.state.matchCount} pups so far!
                </h1>
                <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
                    Yay! That Pup Liked You Too!!!
                </Alert>
            </div>
        );
    }
}

export default Discover;