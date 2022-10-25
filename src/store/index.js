import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()], //새로고침시에도 데이터가 초기화되지 않음
  state: {
    //computed
    dataList: [], //모든 식당 정보
    restaurantInfo: [], //선택한 식당 정보
    koreanFood: [], //한식
    chineseFood: [], //중국식
    japaneseFood: [], //일본식
    globalFood: [], //외국음식
    FastFood: [], //패스트푸드
  },
  getters: {
    //computed
    fetchData(state) {
      axios
        .get('http://openapi.seoul.go.kr:8088/69594e6f566a616a39354776745142/json/LOCALDATA_072404/1/500/')
        .then(response => {
          var obj = response.data.LOCALDATA_072404.row;
          const timeData = ['11:00 - 20:00', '10:00 - 21:00', '12:00 - 20:00', '11:00 - 19:00', '09:00 - 21:00'];
          const rateData = [3.5, 4, 4.5, 5];
          var reviewData = [
            {
              userId: 'jidsdj79',
              title: '최고입니다..',
              content:
                '동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ',
              writeDay: '2022-10-15',
              rates: 4,
            },
            {
              userId: 'dfghgfdsa33',
              title: '최고입니다..',
              content:
                '동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ',
              writeDay: '2022-10-16',
              rates: 4.5,
            },
            {
              userId: 'werty22',
              title: '최고입니다..',
              content:
                '동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ',
              writeDay: '2022-10-17',
              rates: 5,
            },
            {
              userId: 'sdfghgfd46',
              title: '최고입니다..',
              content:
                '동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ',
              writeDay: '2022-10-18',
              rates: 4,
            },
          ];

          // 한국음식
          const tagDataKo = [
            { name: '김치찌개', price: '7,000' },
            { name: '된장찌개', price: '8,000' },
            { name: '순두부찌개', price: '8,000' },
            { name: '제육볶음', price: '10,000' },
            { name: '김치전', price: '8,500' },
            { name: '파전', price: '8,000' },
            { name: '콩비지찌개', price: '9,000' },
            { name: '잡채', price: '8,000' },
          ];
          const foodImgKo = [
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDdfOTAg%2FMDAxNjY1MTA2ODI4NDg0.nd_vA1vMRBn5vCuf1C0jMkus8NkvVqs32gZkwmORgE0g.hxYk3To97YblAmxQ6SE_AIaqKomkYbCQiF_SAG8v8c0g.JPEG.402photostudio%2F220725_0145_L.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjNfMjcw%2FMDAxNjYzOTE1NDIzNzk1.LBZBcH90ac2ITDtT8n-M_HSIqClLhiUlsFGDUiLzQaog.tlw_h0i_pQAH28ZK0NXir2tA4PsabDXG1dMg6fNKelEg.JPEG.all_interior%2FKakaoTalk_20220923_142538893.jpg&type=sc960_832',
            'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/dailylife/20210522160943130czyo.jpg',
            'https://sjnfzdfjrjgl1655541.cdn.ntruss.com/goods/3/2020/08/478_tmp_cf5c67bd8633af7be82b1aa9844da3690347view.jpg',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTJfMTAx%2FMDAxNjY1NTYzNTExOTg0.dQUbVJhAhye8E-0SOYxbNQJoQbrvGWhDRE8ckUfGgV8g.emaVx0G0t7pqLgijmSlB646B6sHIcRFpLDDTJUbW4Ksg.JPEG.bekhk%2FDSCF8157.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMTg2%2FMDAxNjYxODIxOTIzNzE5.wKUiA_y3KmM5jFXkcWL-QN03AiTb9VOeo-zYft73t54g.CrZqXdJVY0PKxb78Z8YlWLkCzOr2u1wHlbDe910gH1Yg.JPEG.goforitseon%2FBDR07815.JPG&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDJfMzgg%2FMDAxNjY0NjkyMzUxNjUw.pT25EZIrLwYdEx6VBe8nWMCcBiK4IBs5hrSh3g6c7mcg.lsJ4yrgNJwO617ZB7GinQp9i8fx3fw9Ehg0Tft3gSrcg.JPEG.saengyan%2FIMG_1079.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MTNfMTYw%2FMDAxNjU1MTA1MjE1NTIy.0TC1k8cW-t2LdXuJ8E5mOQKRGU6XAU4M2g_KW8MGgpUg.2enMnGg4ytcocGKh99PtygXBIrl7DYUZ4fh8iD88_0kg.JPEG.petmaru0100%2F20220610%25A3%25DF141452.jpg&type=sc960_832',
          ];

          //중국식
          const tagDataCh = [
            { name: '마라탕', price: '9,900' },
            { name: '지삼선', price: '12,000' },
            { name: '마파두부', price: '8,000' },
            { name: '싼라펀', price: '8,000' },
            { name: '꿔바로우', price: '13,000' },
            { name: '미씨엔', price: '9,000' },
            { name: '카오렁미엔', price: '7,000' },
            { name: '우육면', price: '9,000' },
          ];
          const foodImgCh = [
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjZfMTUx%2FMDAxNjIyMDAyMTY3OTEy.v-h36YMP31OjysLQwfawqPKEAugMPM7kz2b52CXcpysg.8RYiXU_EqbaR90pqg7Jcc2pN9ztYQ_boycWQlBwkAVgg.JPEG.soulgsoulg%2FKakaoTalk_20210526_102015601_11.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjRfMjIw%2FMDAxNjYzOTQ4NzYxMDk1.uUkYUo3H-xhoSG4uOYsEanI-a2ecO5LEi-UmRdb3rCkg.9y5DPGhrdE3yUJ47Naoyyahso0Ndfk4SVW7RvaLoQl0g.JPEG.eksql3657%2F1663948754064.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDRfMTcg%2FMDAxNjQ5MDU1MDc2NDI0.mmMOhQX8nl80Q-Lnw8E-s9YIhr5HDOvhC-Q1F1db2vEg.am8qViOaQ5eer6wPyVS6jibsxtEvEBkids1HQB8LKbcg.JPEG.amin0831%2FIMG_0163.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDFfMTA0%2FMDAxNjY0NjA3NzcyMDc4._n34pDvmNKw2_GCY0fIO1vWMSh1kvi69VOX-Nx65luQg.tOu2OBbZ8oRVxJaWvTZbgmIEbMvnpgG35rbJqhNaATMg.JPEG.lwm1758%2Foutput_4218814710.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjRfMTUz%2FMDAxNjY0MDA1NjcyODcy.OVu0hBvjzJ76IyKNOox9sYkA6-RR5_eSG_rjGOJgBIkg.HMZiz2Wn-xvROg6btq8MaL9nUbFtqC1CetWjzAretscg.JPEG.dusrud3536%2FIMG_4420.jpg&type=sc960_832s',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MDlfMjcx%2FMDAxNTY3OTU4MDg0NTc5.z6tI-XohyuImduYOYCoO-SXs47UftdJaAnkxiQZ0QaEg.pvTHo4ESHmRgacHsKxy9tlTgx3ZnktiXAPfjZcY6h0Ig.JPEG.bach1060%2F%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AF20190828_203855.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160707_131%2Fsweekend87_1467898355278TOnTs_JPEG%2F20160702_140959.jpg&type=sc960_832',
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDNfNSAg%2FMDAxNjY0ODA0NTEzOTEz.2LboDOFJ-lYSbBa5e2TjG3IPAqKCsI4HhAFT0B2YjoUg.-7oBfLF-vvRO3Dk2MyVTpjrgx6_I-I_YQkwQGpZ9GAsg.JPEG.hts3812%2F20221003%25A3%25DF132653.jpg&type=sc960_832',
          ];

          //일식
          const tagDataJp = [
            { name: '연어 초밥', price: '12,000' },
            { name: '모듬 초밥', price: '17,000' },
            { name: '참치 초밥', price: '15,000' },
            { name: '연어 사시미', price: '12,000' },
            { name: '광어 사시미', price: '13,000' },
            { name: '모듬 사시미', price: '21,000' },
            { name: '카이센동', price: '17,000' },
            { name: '연어동', price: '12,000' },
          ];
          const foodImgJp = [
            'https://recipe1.ezmember.co.kr/cache/recipe/2015/08/20/81657b7270949de3f2e98feb9b5522651.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSiX_9NAXQ7iWdOdcNS5sc_Wx1MexSALoj8LB2L5aW8afUtrs5vrtFAOJOsMEBTLEOyA&usqp=CAU',
            'https://imagescdn.gettyimagesbank.com/500/201709/jv10996009.jpg',
            'http://www.sk5.co.kr/img_src/s600/1227//12272242.jpg',
            'https://t1.daumcdn.net/cfile/tistory/99ED2C435DB02FDB1A',
            'https://mblogthumb-phinf.pstatic.net/MjAxODA1MDNfMTkg/MDAxNTI1MzM5MTI0NzEz.WakwYFMVbXQwjv8-k8UuDv_g-njVq-L_2qgIWuOUtE4g.CoNIBDiPIU6mJDvbO45EULLAaTCZ0WtgBlYO6k2qQxog.JPEG.bingo0491/IMG_0896.jpg?type=w800',
            'https://img.insight.co.kr/static/2019/08/01/700/84h6yncso2x016weze6e.jpg',
            'https://mblogthumb-phinf.pstatic.net/MjAxODA0MDVfMjYw/MDAxNTIyOTM5NDU3NzIy.k24Do9Gjj6E8FpW_2l2sh7jsySN0Cz_uZoJJe2Bj-5cg.ry4C-kxdC-uTd2Cytxj3JnH1z2dZ38_n_gXZh112NaEg.JPEG.eastcong/BandPhoto_2018_04_05_23_27_10.jpg?type=w800',
          ];

          //데이터 담을 공간

          var tagEmpData = []; //태그
          var imgEmpData = []; //이미지

          //태그 데이터 랜덤 추출
          for (let i = 0; i < obj.length; i++) {
            //한식
            if (obj[i].SNTUPTAENM === '한식') {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < foodImgKo.length; i++) {
                tagEmpData.push(tagDataKo[Math.floor(Math.random() * tagDataKo.length)]);
                imgEmpData.push(foodImgKo[Math.floor(Math.random() * foodImgKo.length)]);
              }
              state.koreanFood.push({
                title: obj[i].SNTUPTAENM, //음식종류
                name: obj[i].BPLCNM, //이름
                addr: obj[i].RDNWHLADDR, //주소
                region: obj[i].RDNWHLADDR.slice(6, 9), //지역구
                hp: obj[i].SITETEL, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgKo[Math.floor(Math.random() * foodImgKo.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: reviewData, //리뷰(날짜, 아이디, 별점, 제목, 내용)
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //중국식
            else if (obj[i].SNTUPTAENM === '중국식') {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < foodImgKo.length; i++) {
                tagEmpData.push(tagDataCh[Math.floor(Math.random() * tagDataCh.length)]);
                imgEmpData.push(foodImgCh[Math.floor(Math.random() * foodImgCh.length)]);
              }
              state.chineseFood.push({
                name: obj[i].BPLCNM, //이름
                addr: obj[i].RDNWHLADDR, //주소
                region: obj[i].RDNWHLADDR.slice(6, 9), //지역구
                hp: obj[i].SITETEL, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgCh[Math.floor(Math.random() * foodImgCh.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: reviewData, //리뷰(날짜, 아이디, 별점, 제목, 내용)
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //일식
            else if (obj[i].SNTUPTAENM === '일식') {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < foodImgJp.length; i++) {
                tagEmpData.push(tagDataJp[Math.floor(Math.random() * tagDataJp.length)]);
                imgEmpData.push(foodImgJp[Math.floor(Math.random() * foodImgJp.length)]);
              }
              state.japaneseFood.push({
                name: obj[i].BPLCNM, //이름
                addr: obj[i].RDNWHLADDR, //주소
                region: obj[i].RDNWHLADDR.slice(6, 9), //지역구
                hp: obj[i].SITETEL, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgJp[Math.floor(Math.random() * foodImgJp.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: reviewData, //리뷰(날짜, 아이디, 별점, 제목, 내용)
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }
            //   case "외국음식전문점(인도,태국등)": //5
            //   case "호프/통닭": //31
          }

          //데이터 합치기
          state.dataList = state.koreanFood.concat(state.chineseFood, state.japaneseFood);
          return state.dataList;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //   //   case "외국음식전문점(인도,태국등)": //5
    //   //   case "호프/통닭": //31
  },
  mutations: {
    //method
    selectRes(state, payload) {
      state.restaurantInfo = []; // 배열 초기화
      state.restaurantInfo.push(payload);
    },
    addReview() {},
    deleteReview() {},
    editReview() {},
  },
  actions: {},
  modules: {},
});
