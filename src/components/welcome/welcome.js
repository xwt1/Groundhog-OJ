
import React from 'react';
import ParticlesBg from "particles-bg";


class Welcome extends React.Component {

    render() {
        return (
            <div>
                <div>
                Welcome to GroundHog OJ.    <br/>

                Have a good time.
                </div>
                <ParticlesBg type="random" bg={true}/>
            </div>
        );
    }
}

export default Welcome ;
