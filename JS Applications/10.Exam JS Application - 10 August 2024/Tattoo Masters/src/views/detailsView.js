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
            <div>
                <div id="info-wrapper">
                    <p id="details-type">${item.type}</p>
                    <div id="details-description">
                        <p id="user-type">${item.userType}</p>
                        <p id="description">${item.description}</p>
                    </div>
                    <h3>Like tattoo:<span id="like">${likes}</span></h3>
                    <!--Edit and Delete are only for creator-->
                    ${hasUser ? html`
                        ${isOwner ? html`
                            <div id="action-buttons">
                                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                                <a @click=${delItem} data-id=${item._id} href="#" id="delete-btn">Delete</a>
                            </div>`
                        : ''}
                        ${hasLiked ? null : html`
                            <div id="action-buttons">
                                <a @click=${onLike} data-id=${item._id} href="#" id="like-btn">Like</a>
                            </div>`}
                    ` : ''}
                </div>
            </div>
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

    const tattooId = e.target.dataset.id;
    await likesService.postLike({tattooId});
    goTo(`/details/${tattooId}`);
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
