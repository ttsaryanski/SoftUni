import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { likesService } from '../service/likeService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (item, isOwner) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <div>
                <img id="details-img" src=${item.imageUrl} alt="example1" />
                <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="details-price">Price: €${item.price}</p>
                    <p class="details-availability">${item.availability}</p>
                    <p class="type">Type: ${item.type}</p>
                    <p id="item-description">${item.description}</p>
                </div>
                ${isOwner ? html`
                    <!--Edit and Delete are only for creator-->
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${delItem} data-id=${item._id} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>
                ` : ''}               
            </div>
        </div>
    </section>   
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const item = await dataService.getDetails(id);
    const isOwner = userUtil.hasOwner(item._ownerId);

    renderer(temp(item, isOwner))
}

async function delItem(e) {
    e.preventDefault();

    const id = e.target.dataset.id;
    const confirm = window.confirm('shure?');

    if (!confirm) {
        return;
    }

    await dataService.delItem(id);
    goTo('/dashboard');
}
