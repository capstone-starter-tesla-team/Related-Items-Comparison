import React, { Component } from 'react';
import StarsRating from 'stars-rating';
export default class Form extends Component {
	render() {
		return (
			<div>
						<div
							className="modal fade"
							id="exampleModalLong"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLongTitle"
							aria-hidden="true"
						>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLongTitle">
											Modal title
										</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="card-product">
											<img className="card-image" src={this.props.mydata.image} />

											<div className="card-category">
												<a>{this.props.mydata.category} </a>
											</div>
											<div className="card-title">
											{this.props.mydata.name}
												<span className="card-price">
													<br />
													{this.props.mydata.price}
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
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
			</div>
		);
	}
}
