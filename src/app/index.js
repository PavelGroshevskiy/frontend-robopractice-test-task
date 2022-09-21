import React from "react";
import { userServise } from "../API/userServise";

import Table from "../components/Table/Table";

export const App = () => {
	const [users, setUsers] = React.useState([]);

	const fetchUsers = async () => {
		const users = await userServise.getAll();
		setUsers(users);
	};

	React.useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<>
			<Table users={users} />
		</>
	);
};
