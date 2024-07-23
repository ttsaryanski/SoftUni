import { dataService } from "../service/dataService.js";
import { goTo } from "./goTo.js";

export async function addCatch(e) {
    //e.preventDefault();
    
    const formData = new FormData(e.target);
    const {angler, weight, species, location, bait, captureTime} = Object.fromEntries(formData);
    
    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return alert('Ooopps!')
    }
    
    await dataService.create({angler, weight, species, location, bait, captureTime});

    goTo('/home');
    e.target.reset();

}
