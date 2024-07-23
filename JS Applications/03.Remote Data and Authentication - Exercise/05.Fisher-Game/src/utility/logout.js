import { userService } from "../service/userService.js";
import { showCatches } from "../views/catchesView.js";
import { goTo } from "./goTo.js";
import { updateNav } from "./updateNav.js";

export async function logout() {
    await userService.logout();

    goTo('/home');
    showCatches()
    updateNav();
}