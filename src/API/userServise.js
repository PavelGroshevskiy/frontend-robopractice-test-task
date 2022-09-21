import axios from "axios";

export class userServise {
	static async getAll() {
		try {
			const response = await axios.get("http://localhost:8080/api/users");
			return response.data;
		} catch (e) {
			console.log(e);
		}
	}
}
