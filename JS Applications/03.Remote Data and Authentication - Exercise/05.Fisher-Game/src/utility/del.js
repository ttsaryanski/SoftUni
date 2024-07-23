import { dataService } from "../service/dataService.js";
import { showCatches } from "../views/catchesView.js";
import { goTo } from "./goTo.js";

export async function delCatch(e) {
    const id = e.target.getAttribute('data-dev');
    
    await dataService.del(id);
    showCatches();
    goTo('/home');
}