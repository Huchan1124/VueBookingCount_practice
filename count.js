import { createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.9/vue.esm-browser.min.js";

const data = {
    originPrice: 270,
    groupPrice:210,
    handleFee:20,
    tktNum:1,
    couponNum:0,
    // originPriceTotal: tktNum * originPrice,
    // groupPriceTotal: tktNum * groupPrice,
    // handleFeeTotal: tktNum * handleFee,

};


const app = {
    data(){
     return {
            ...data,

        }
    },
    methods:{

    },
    mounted(){

    },
};

createApp(app).mount("#app");