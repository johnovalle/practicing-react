import React from "react";
import { Link } from "react-router";

import Footer from "../common/Footer/Footer";
import Nav from "../common/Nav";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log("layout", this.props);
        return (
            <div>

                <Nav location={location} />

                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}