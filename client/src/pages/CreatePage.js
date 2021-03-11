import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const CreatePage = () => {
  const history = useHistory()
	const { request } = useHttp();
	const [ link, setLink ] = useState('');
	const auth = useContext(AuthContext);

	useEffect(() => {
		window.M.updateTextFields();
	}, []);

	const pressHandler = async(event) => {
		if (event.key === 'enter') {
			try {
				const data = await request(
					'/api/link/generate',
					'POST',
					{ from: link },
					{
						Authorization: `Bearer ${auth.token}`
					}
				);
				history.push(`/detail/${data.link_id}`)
			} catch (e) {}
		}
	}
	return (
		<div className="row">
			<div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
				<div className="input-field">
					<input
						placeholder="Enter link"
						id="link"
						type="text"
						value={link}
						onChange={(e) => setLink(e.target.value)}
						onKeyPress={pressHandler}
					/>
					<label htmlFor="link">Enter Link</label>
				</div>
			</div>
		</div>
	);
};
