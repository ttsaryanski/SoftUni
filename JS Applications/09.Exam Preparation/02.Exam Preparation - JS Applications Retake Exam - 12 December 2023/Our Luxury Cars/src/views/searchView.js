import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { renderer } from "../utility/render.js";
import { createSubmitHandler } from "../utility/submiter.js";

const temp = (handler, cars) => html`
    <!-- Search page -->
    <section id="search">
      <div class="form">
        <h4>Search</h4>
        <form @submit=${handler} class="search-form">
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>
        <div class="search-result">
            ${cars ? cars.map(car => cardTemp(car)) : html`<h2 class="no-avaliable">No result.</h2>`}
      </div>
    </section>
`;

const cardTemp = (car) => html`
    <!--If there are matches display a div with information about every motorcycle-->
    <div class="car">
        <img src=${car.imageUrl} alt="example1"/>
        <h3 class="model">${car.model}</h3>
        <a class="details-btn" href="/details/${car._id}">More Info</a>
    </div>
`;

export function showSearchView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    const {query = data['search']} = data;
    
    let cars = null;
    const result = await dataService.searchCar(query);
    if (result.length > 0) {
        cars = result;
    }
    
    renderer(temp(createSubmitHandler(onSubmit), cars));
    formRef.reset();
}
