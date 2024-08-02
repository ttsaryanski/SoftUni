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
                    <p id="details-title">${item.title}</p>
                    <p id="details-category">
                        Category: <span id="categories">${item.category}</span>
                    </p>
                    <p id="details-salary">
                        Salary: <span id="salary-number">${item.salary}</span>
                    </p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <h4>Description</h4>
                            <span>${item.description}</span>
                        </div>
                        <div id="details-requirements">
                            <h4>Requirements</h4>
                            <span>${item.requirements}</span>
                        </div>
                    </div>
                    <p>Applications: <strong id="applications">${likes}</strong></p>
                    ${hasUser ? html`
                        ${isOwner ? html`
                            <div id="action-buttons">
                                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                                <a @click=${delItem} data-id=${item._id} href="" id="delete-btn">Delete</a>
                            </div>
                        ` : ''}
                        ${hasLiked ? null : html`
                            <div id="action-buttons">
                                <a @click=${onLike} data-id=${item._id} href="" id="apply-btn">Apply</a>
                            </div>`}
                        ` : ''}
                </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const userData = userUtil.getUserData();

    const item = await dataService.getDetails(id);
    const isOwner = userUtil.hasOwner(item._ownerId);

    const hasUser = Boolean(userData);
    const likesInfo = await likesService.getLikesById(id);
    const hasLiked = likesInfo.hasLiked || isOwner;
    const likes = likesInfo.likes;

    renderer(temp(item, isOwner, hasUser, hasLiked, likes))
}

async function onLike(e) {
    e.preventDefault();

    const offerId = e.target.dataset.id;
    await likesService.postLike({offerId});
    goTo(`/details/${offerId}`);
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
