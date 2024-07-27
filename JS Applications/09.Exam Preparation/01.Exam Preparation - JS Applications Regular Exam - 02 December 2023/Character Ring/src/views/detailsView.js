import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { userUtil } from '../utility/userUtil.js';
import { likesService} from '../service/likesService.js'


const temp = (char, isOwner, hasUser, hasLiked, likes) => html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${char.imageUrl} alt="example1" />
        <div>
            <p id="details-category">${char.category}</p>
            <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${char.description}</p>
                <p id="more-info">${char.moreInfo}</p>
            </div>
            </div>
                <h3>Is This Useful:<span id="likes">${likes}</span></h3>
                <!--Edit and Delete are only for creator-->
                ${hasUser ? html`
                    <div id="action-buttons">
                    ${isOwner ? html`                
                        <a href="/edit/${char._id}" id="edit-btn">Edit</a>
                        <a @click=${delChar} data-id=${char._id} href="" id="delete-btn">Delete</a>`
                        : ''}
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        ${hasLiked ? null : html`<a @click=${onLike} data-id=${char._id} href="javascript:void(0)" id="like-btn">Like</a>`}
                </div>` : ''}              
            </div>
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;

    const [char, likesInfo] = await Promise.all([
        dataService.getDetails(id),
        likesService.getLikesById(id)
    ]);

    const userData = userUtil.getUserData();
    const isOwner = userUtil.hasOwner(char._ownerId);
    const hasUser = Boolean(userData);
    const hasLiked = likesInfo.hasLiked || isOwner;
    const likes = likesInfo.likes;

    renderer(temp(char, isOwner, hasUser, hasLiked, likes));
}

async function onLike(e) {
    e.preventDefault();

    const characterId = e.target.dataset.id;
    
    await likesService.postLike({characterId});
    
    goTo(`/details/${characterId}`);
}

async function delChar(e) {
    e.preventDefault();

    const id = e.target.dataset.id;
    const confirmRes = confirm('del this char');

    if (!confirmRes) {
        return;
    }

    await dataService.delChar(id);
    goTo('/dashboard');

}
