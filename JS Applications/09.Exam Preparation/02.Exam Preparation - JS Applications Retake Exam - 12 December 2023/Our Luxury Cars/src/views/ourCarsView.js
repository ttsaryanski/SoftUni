import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (cars) => html`
        <h3 class="heading">Our Cars</h3>
            <section id="dashboard">
            <!-- Display a div with information about every post (if any)-->
                ${cars.map(car => cardTemp(car))}
            </section>
                <!-- Display an h2 if there are no posts -->
            ${cars.length === 0 ?  html`<h3 class="nothing">Nothing to see yet</h3>` : ''}
`;

const cardTemp = (car) => html`
    <div class="car">
        <img src=${car.imageUrl} alt="example1" />
        <h3 class="model">${car.model}</h3>
        <div class="specs">
          <p class="price">Price: ${car.price}</p>
          <p class="weight">Weight: ${car.weight} kg</p>
          <p class="top-speed">Top Speed: ${car.speed} kph</p>
        </div>
        <a class="details-btn" href="/details/${car._id}">More Info</a>
      </div>
`;

export async function showAllCars() {
    const cars = await dataService.getAll();

    renderer(temp(cars));
}
