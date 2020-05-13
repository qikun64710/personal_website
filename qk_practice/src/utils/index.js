import vue from 'vue'

import homeImage from '../assets/image/home.png'
import github from '../assets/image/github.png'
import twitter from '../assets/image/twitter.png'
import wechat from '../assets/image/wechat.png'
import email from '../assets/image/email.png'
import twitterChate from '../assets/image/twitterChate.png'
import wechateImage from '../assets/image/wechateImage.jpg'
import homeOrage from '../assets/image/homeOrage.png'
const url = {
    homeImage,
    email,
    wechat,
    twitter,
    github,
    twitterChate,
    wechateImage,
    homeOrage
}
const media = {
    install(vue) {
        Object.defineProperties(vue.prototype, {
            $media: {
                get() {
                    return url
                }
            }
        })
    }
}
vue.use(media)