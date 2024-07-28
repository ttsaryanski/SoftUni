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
            <img
                id="details-img"
                src=${item.imageUrl}
                alt="example1"
            />
            <div>
                <p id="details-type">${item.type}</p>
                <div id="info-wrapper">
                  <div id="details-description">
                    <p id="description">${item.description}</p>
                    <p id="more-info">${item.learnMore}</p>
                    </div>
                </div>
                <h3>Like Solution:<span id="like">${likes}</span></h3>
  
                <!--Edit and Delete are only for creator-->
                ${hasUser ? html`
                    <div id="action-buttons">
                        ${isOwner ? html`
                            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                            <a @click=${delItem} data-id=${item._id} href="javascipt:void(0)" id="delete-btn">Delete</a>
                        ` : ''}
                        ${hasLiked ? null : html`
                            <!--Bonus - Only for logged-in users ( not authors )-->
                            <a @click=${onLike} data-id=${item._id} href="javascript:void(0)" id="like-btn">Like</a>
                        `}
                    </div>
                ` : ''}
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const userData = userUtil.getUserData();

    const item = await dataService.getDetails(id);
    const isOwner = userUtil.hasOwner(item._ownerId);

    const likesInfo = await likesService.getLikesById(id);
    const hasUser = Boolean(userData);
    const hasLiked = likesInfo.hasLiked || isOwner;
    const likes = likesInfo.likes;

    renderer(temp(item, isOwner, hasUser, hasLiked, likes))
}

async function onLike(e) {
    e.preventDefault();

    const solutionId = e.target.dataset.id;
    await likesService.postLike({solutionId});
    goTo(`/details/${solutionId}`);
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
