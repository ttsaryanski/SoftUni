import { dataService } from "../service/dataService.js";
import { goTo } from "./goTo.js";
import { showCatches } from "../views/catchesView.js";

export async function updateCatch(e) {

    const id = e.target.getAttribute('data-dev');
    
    let angler = e.target.parentElement.querySelectorAll('input')[0].value;
    let weight = e.target.parentElement.querySelectorAll('input')[1].value;
    let species = e.target.parentElement.querySelectorAll('input')[2].value;
    let location = e.target.parentElement.querySelectorAll('input')[3].value;
    let bait = e.target.parentElement.querySelectorAll('input')[4].value;
    let captureTime = e.target.parentElement.querySelectorAll('input')[5].value;
    
    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return alert('Ooopps!')
    }
    
    await dataService.update(id, {angler, weight, species, location, bait, captureTime});
    showCatches();
    goTo('/');
}
