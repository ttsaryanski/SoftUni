import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { likesService } from '../service/likeService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';

const temp = (item, isOwner, hasUser, hasLiked, likes) => html`
    <!-- Details Page -->
    <section id="details-page">
        <h1 class="title">Post Details</h1>
        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src=${item.imageUrl} alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${item.title}</h2>
                    <p class="post-description">Description: ${item.description}</p>
                    <p class="post-address">Address: ${item.address}</p>
                    <p class="post-number">Phone number: ${item.phone}</p>
                    <p class="donate-Item">Donate Materials: ${likes}</p>
                    <!--Edit and Delete are only for creator-->
                    <div class="btns">
                    ${hasUser ? html`
                        ${isOwner ? html`<a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                                         <a @click=${delItem} data-id=${item._id} href="#" class="delete-btn btn">Delete</a>` : ''}
                        ${hasLiked ? null : html`<a @click=${onLike} data-id=${item._id} href="javascript:void(0)" class="donate-btn btn">Donate</a>`}                       
                    ` : ''}
                    </div>
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

    const postId = e.target.dataset.id;
    await likesService.postLike({postId});
    goTo(`/details/${postId}`);
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
