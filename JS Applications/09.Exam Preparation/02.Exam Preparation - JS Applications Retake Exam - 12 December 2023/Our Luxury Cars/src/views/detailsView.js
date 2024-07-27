import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (car, isOwner) => html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${car.imageUrl} alt="example1" />
        <p id="details-title">${car.model} </p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">Price: ${car.price}</p>
            <p class="weight">Weight: ${car.weight} kg</p>
            <p class="top-speed">Top Speed: ${car.speed} kph</p>
            <p id="car-description">${car.about}</p>
          </div>
          <!--Edit and Delete are only for creator-->
          ${isOwner ? html`
            <div id="action-buttons">
            <a href=/edit/${car._id} id="edit-btn">Edit</a>
            <a href="" @click=${delCar} data-id=${car._id} id="delete-btn">Delete</a>
          </div>` : ''}
        </div>
      </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    
    const car = await dataService.getDetails(id);
    const isOwner = userUtil.hasOwner(car._ownerId);
    
    renderer(temp(car, isOwner));
}

async function delCar(e) {
    e.preventDefault();

    const id = e.target.dataset.id;
    const confirmRes = confirm('del this car?')

    if (!confirmRes) {
        return;
    }
    await dataService.delCar(id);
    goTo('/ourCars');
}