import { ID, type Models } from "appwrite";
import { reactive } from "vue";
import { account } from "../appwrite";

// Definition des User-Objekts mit Typen
interface UserState {
	current: Models.User<Models.Preferences> | null;
	init: () => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export const userStore = reactive<UserState>({
	current: null,

	async init() {
		try {
			this.current = await account.get();
		} catch (_e) {
			this.current = null;
		}
	},

	async register(email: string, password: string) {
		await account.create(ID.unique(), email, password);
		await this.login(email, password);
	},

	async login(email: string, password: string) {
		await account.createEmailPasswordSession(email, password);
		window.location.href = "/"; // Weiterleitung zur Startseite
	},

	async logout() {
		await account.deleteSession("current");
		this.current = null;
	},
});
