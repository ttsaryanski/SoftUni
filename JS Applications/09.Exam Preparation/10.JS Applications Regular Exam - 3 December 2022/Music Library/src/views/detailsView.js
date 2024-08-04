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
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${item.iamgeUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
                <p><strong>Album name:</strong><span id="details-album">${item.album}</span></p>
                <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
            <!--Edit and Delete are only for creator-->
            ${hasUser ? html`
                ${isOwner ? html`
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${delItem} data-id=${item._id} href="" id="delete-btn">Delete</a>
                    </div>
                ` : ''}
                ${hasLiked ? null : html`
                    <div id="action-buttons">
                        <a @click=${onLike} data-id=${item._id} href="" id="like-btn">Like</a>
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

    const albumId = e.target.dataset.id;
    await likesService.postLike({albumId});
    goTo(`/details/${albumId}`);
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
