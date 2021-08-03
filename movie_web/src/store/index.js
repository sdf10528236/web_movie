/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { Indicator } from "mint-ui";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    istabbarshow:true,
    ComingList:[],
    NowplayinList:[],
    NowplayinListId:[],
  },
  getters:{
    comingListGetter(state){
      return state.ComingList.filter((item,index)=>index<100)
    }
  },
  mutations: {
    //唯一修改狀態的位置
    HideTabbar(state,data){
      state.istabbarshow=data;
    },
    ShowTabbar(state,data){
      state.istabbarshow=data;
    },
    CominListMutation(state,data){
      state.ComingList=data;
    },
    NowplayinListMutation(state,data){
      state.NowplayinList=data;
    },
    NowplayinListIdMutation(state,data){
      state.NowplayinListId=data;
    }
  },
  actions: {
    //異步處理
    getCominListAction(store){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.get("/ajax/comingList?ci=10&token=").then((res) => {
         console.log(res.data);
       store.commit("CominListMutation",res.data.coming)
       Indicator.close();
      });
    },
  
  getNowplayinListAction(store){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    axios.get("/ajax/movieOnInfoList?token=").then((res) => {
       console.log(res.data);
     store.commit("NowplayinListMutation",res.data.movieList)
     store.commit("NowplayinListIdMutation",res.data.movieIds)
     Indicator.close();
    });
  }
},
  modules: {
  },
})
