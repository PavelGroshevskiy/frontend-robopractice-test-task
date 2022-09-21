import React from "react";
import TRow from "../TRow/TRow";
import "./style.css";

const Table = ({ users }) => {
	const numbers = Array(31)
		.fill(0)
		.map((_, idx) => [idx + 1]);

	return (
		<div>
			<thead>
				<tr>
					<th>User</th>
					{numbers && numbers.map((i) => <th key={i}>{i}</th>)}
					<th>Monthly</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<>
						<TRow user={user} />
					</>
				))}
			</tbody>
		</div>
	);
};

export default Table;
