import React, { Component } from 'react';
import StarsRating from 'stars-rating';


class Cardproduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obj: {},
			togle: true,
			arr: [],
		};
	}
	handelClick(obj) {
		this.props.passData(1, obj);
		var x = [];
		this.state.arr.push(obj);
		x.push(this.state.arr);
		//  console.log(this.state.arr)
	}

	render() {
		return (
			<div>
     
				<div className="card-product">
					<img className="card-image" src={this.props.related.image} />
					<div>
						<div className="favstar-position">
							<input
								className="star1"
								type="checkbox"
								data-toggle="modal"
								data-target="#exampleModalLong"
								onClick={() => {
							this.handelClick(this.props.related);
								}}
							/>
						</div>
						<div className="card-category">
							<a> {this.props.related.category}</a>
						</div>
						<div className="card-title">
							{this.props.related.name}
							<span className="card-price">
								<br />
								${this.props.related.price}
								<br />
							</span>
							<span>
								<StarsRating
									rating={5}
									starRatedColor="orange"
									starDimension="15px"
									starSpacing="1px"
									numberOfStars={5}
									name="rating"
								/>
							</span>
						</div>
					</div>
				</div>
        
			</div>
		);
	}
}
export default Cardproduct;
