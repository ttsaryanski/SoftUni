import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { goTo } from '../utility/goTo.js';

const temp = (handler, car) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form form-auto">
        <h2>Edit Your Car</h2>
        <form @submit=${handler} class="edit-form">
          <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
          <input
            type="text"
            name="imageUrl"
            id="car-image"
            placeholder="Your Car Image URL"
            .value=${car.imageUrl}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
            .value=${car.price}
          />
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight in Kg"
            .value=${car.weight}
          />
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Top Speed in Kmh"
            .value=${car.speed}
          />
          <textarea
            id="about"
            name="about"
            placeholder="More About The Car"
            rows="10"
            cols="50"
            .value=${car.about}
          ></textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
`;

let id = null;
export async function showEditView(ctx) {
    id = ctx.params.id;
    const car = await dataService.getDetails(id)

    renderer(temp(createSubmitHandler(onSubmit), car));
}

async function onSubmit(data, formRef) {
    const {model, imageUrl, price, weight, speed, about} = data;
    
    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert('All fields are required');
    }

    await dataService.editCar(id, {model, imageUrl, price, weight, speed, about});
    goTo(`/details/${id}`);
    formRef.reset();
}
