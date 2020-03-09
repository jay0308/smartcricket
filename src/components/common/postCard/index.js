import React from "react";
import s from "./postcard.module.scss";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const PostCard = (props) => {
    return (
        <div className={s.postCardBox}>
            <div className={s.postCardBoxInner}>
                <div className={s.postedBy}>
                    <div className={s.userImg}>
                        <span></span>
                    </div>
                    <div className={s.userName}>{props.name}</div>
                </div>
                <div className={`${s.contentBox} ${s[props.postType]}`}>
                    {
                        props.src &&
                        <div className={s.postImg}><img src={props.src} alt={"Post media"} /></div>

                    }
                    {
                        props.content &&
                        <div className={s.postConent}>
                            {props.content}
                        </div>
                    }
                </div>
                <div className={s.likesBox}>
                    <div className={s.totalLikes}>
                        <span className={s.totalLike}><span className={s.icon}><ThumbUpAltRoundedIcon/></span>{props.likes}</span>
                        <span className={s.postDate}>{new Date(props.date).toDateString()}</span>
                    </div>
                    <div className={s.postActions}>
                        <span className={s.likeBtn}><ThumbUpAltOutlinedIcon/></span>
                        <span className={s.shareBtn}><img src="/images/whatsApp.svg" alt="whatsapp icon"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard