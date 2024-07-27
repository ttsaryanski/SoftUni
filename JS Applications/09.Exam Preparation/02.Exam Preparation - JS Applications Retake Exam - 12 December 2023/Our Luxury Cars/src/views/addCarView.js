import {html} from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
      <div class="form form-auto">
        <h2>Share Your Car</h2>
        <form @submit=${handler} class="create-form">
          <input type="text" name="model" id="model" placeholder="Model"/>
          <input
            type="text"
            name="imageUrl"
            id="car-image"
            placeholder="Your Car Image URL"
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
          />
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight in Kg"
          />
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Top Speed in Kmh"
          />
          <textarea
            id="about"
            name="about"
            placeholder="More About The Car"
            rows="10"
            cols="50"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </section>
`;

export function showAddView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {model, imageUrl, price, weight, speed, about} = data;
    
    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert('All fields are required');
    }

    await dataService.createNew({model, imageUrl, price, weight, speed, about});
    goTo('/ourCars');
    formRef.reset();
}
