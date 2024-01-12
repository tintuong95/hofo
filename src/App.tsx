import React, {FC} from 'react';
import {db} from './DB';
import {useLiveQuery} from 'dexie-react-hooks';
import {Button} from 'antd';
import {Route, Routes} from 'react-router-dom';
import DashBoard from './Components/Layout/DashBoard';
import Home from './Page/Home';

const App: React.FC = () => {
	const addAccount = async () => {
		await db.accounts.add({
			username: 'username',
			password: 'password',
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	};

	const removeAccount = async (id?: number) => {
		id && (await db.accounts.delete(id));
	};

	const accounts = useLiveQuery(
		() => db.accounts.reverse().sortBy('createdAt'),
		[]
	);
	return (
		<Routes>
			<Route path='/' element={<DashBoard />}>
				<Route path='home' element={<Home />} />
			</Route>
		</Routes>
	);
};

export default App;
