import {Router} from 'react-router-dom';
import React, {useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export const BaseRouter = ({basename, children, history}:any) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={basename}
			location={state.location}
			navigationType={state.action}
			navigator={history}>
			{children}
		</Router>
	);
};

BaseRouter.propTypes = {
	basename: PropTypes.string,
	children: PropTypes.node,
	history: PropTypes.any,
};