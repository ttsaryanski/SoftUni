import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (handler) => html`
    <!-- Create Listing Page -->
    <section id="create-listing">
        <div class="container">
            <form @submit=${handler} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>
`;

export function showCreateView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {brand, model, description, year, imageUrl, price} = data;
    if (!brand || !model || !description || !year || !imageUrl || !price) {
        return alert('Oops');
    }

    if (year <=0 || price <= 0) {
        return alert('Oops');
    }

    let newYear = String(year);
    
    await dataService.createNew({brand, model, description, year: newYear, imageUrl, price});
    goTo('/dashboard');
    formRef.reset();
}
