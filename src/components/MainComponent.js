import React, {Component} from 'react';
import AboutComponent from './AboutComponent';
import Footer from './FooterComponent';
import HeroComponent from './HeroComponent';
import NavBar from './NavBar';
import Programms from './Programms';
import Wellness from './Wellness';
import WellnessInfo from './WellnessInfo';



class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HeroComponent />
                <AboutComponent />
                <Programms />
                <Footer />
            </div>
        );
    }
}

export default Main;
