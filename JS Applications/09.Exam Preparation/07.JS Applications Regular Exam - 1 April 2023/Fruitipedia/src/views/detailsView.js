import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { likesService } from '../service/likeService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (item, isOwner, hasUser, hasLiked, likes) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">${item.nutrition}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${delItem} data-id=${item._id} href="" id="delete-btn">Delete</a>
                    </div>
                `: ''}
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const userData = userUtil.getUserData();

    const item = await dataService.getDetails(id);
    const isOwner = userUtil.hasOwner(item._ownerId);

    // const hasUser = Boolean(userData);
    // const likesInfo = await likesService.getLikesById(id);
    // const hasLiked = likesInfo.hasLiked || isOwner;
    // const likes = likesInfo.likes;

    renderer(temp(item, isOwner)); //, hasUser, hasLiked, likes))
}

// async function onLike(e) {
//     e.preventDefault();

//     const solutionId = e.target.dataset.id;
//     await likesService.postLike({solutionId});
//     goTo(`/details/${solutionId}`);
// }

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
