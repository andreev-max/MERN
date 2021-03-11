import React, { useState, useCallback, useContext, useEffect } from 'react';
import { LinksList } from '../components/LinksList';
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const LinksPage = () => {
	const { loading, request } = useHttp();
	const [ links, setLinks ] = useState([]);
	const { token } = useContext(AuthContext);

	const fetchLinks = useCallback(
		async () => {
			try {
				const fetched = await request('/api/link', 'GET', null, {
					Authorization: `Bearer ${token}`
				});
				setLinks(fetched);
			} catch (e) {}
		},
		[ token, request ]
	);

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  if (loading) {
    return <Loader />
  }

	return (
		<div>
			{ !loading && <LinksList links={links} />}
		</div>
	);
};
