import React from "react";

import "./style.css";

const TRow = ({ user }) => {
	let monthly = 0;

	const numbers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
		25, 26, 27, 28, 29, 30, 31,
	];

	function Time(day) {
		const end = day.End.split("-");
		const start = day.Start.split("-");
		const end2 = +end[0] * 60 + +end[1];
		const start2 = +start[0] * 60 + +start[1];
		const res = end2 - start2;
		monthly += res;
		return Translate(res);
	}

	function Translate(numb) {
		const min = Math.floor(numb / 60);
		const sec = numb % 60;
		return min + ":" + sec;
	}

	function chek(i) {
		let res = "0";
		for (let day of user.Days) {
			let d = +day.Date.split("-")[2];
			if (d === i) {
				res = Time(day);
				break;
			}
		}
		return res;
	}
	return (
		<tr>
			<td>{user.Fullname}</td>
			{numbers &&
				numbers.map((i) => (
					<React.Fragment key={i}>
						<td>{chek(i)}</td>
					</React.Fragment>
				))}
			<td>{Translate(monthly)}</td>
		</tr>
	);
};

export default TRow;