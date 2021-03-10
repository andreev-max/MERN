import React from 'react';

export const AuthPage = () => {
	return (
		<div className="row">
			<div className="col s6 offset-s3">
				<h1>Сократи ссылку</h1>
				<div className="card blue darken-1">
					<div className="card-content white-text">
						<span className="card-title">Authorization</span>
						<div>

							<div className="input-field">
								<input placeholder="Enter your email"
                id="email"
                type="text"
                className="yellow-input"
                />
								<label htmlFor="email">Email</label>
							</div>

              <div className="input-field">
								<input placeholder="Enter your password"
                id="password"
                type="password"
                className="yellow-input"
                />
								<label htmlFor="password">Password</label>
							</div>


						</div>
					</div>
					<div className="card-action">
						<button className="btn yellow darken-4" style={{ marginRight: 10 }}>
							Sign In
						</button>
						<button className="btn grey lighten-1 black-text">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
};
