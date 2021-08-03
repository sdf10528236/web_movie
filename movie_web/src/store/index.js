/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    istabbarshow:true,
    ComingList:[],
    NowplayinList:[],
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
    }
  },
  actions: {
    //異步處理
    getCominListAction(store){
      axios.get("/ajax/comingList?ci=10&token=").then((res) => {
         console.log(res.data);
       store.commit("CominListMutation",res.data.coming)
      });
    },
  
  getNowplayinListAction(store){
    axios.get("/ajax/movieOnInfoList?token=").then((res) => {
       console.log(res.data);
     store.commit("NowplayinListMutation",res.data.movieList)
    });
  }
},
  modules: {
  },
})
