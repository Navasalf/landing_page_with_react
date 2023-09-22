import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


import { Navbar } from './navbar'
// import { Container } from './container'
import { Jumbotron } from './jumbotron'
import { Card } from './card'
import { Footer } from './footer'

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<Jumbotron />
						<div className="row justify-content-center">
							<div class="col">
								<Card />
							</div>
							<div class="col">
								<Card />
							</div>
							<div class="col">
								<Card />
							</div>
							<div class="col">
								<Card />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	);
};

export default Home;
