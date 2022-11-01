<template>
  <div>
    <!-- 헤더 -->
    <HeaderSection />
    <!-- 메인, 검색결과, 상세페이지 -->
    <router-view />
  </div>
</template>

<script>
import HeaderSection from "@/components/common/HeaderSection.vue";
import axios from "axios";

export default {
  name: "IndexView",
  data() {
    return {
      dataList: [], //전체 데이터
      koreanFood: [], //한식
      chineseFood: [], //중식
      japaneseFood: [], //일식
      globalFood: [], //외국음식
      fastFood: [], //패스트푸드
    };
  },
  components: {
    HeaderSection,
  },

  mounted() {
    //전체 데이터
    this.fetchData();
  },

  methods: {
    //api호출 및 데이터 추가, store에 저장
    fetchData() {
      axios
        .get("https://raw.githubusercontent.com/sj5466/feelanet__json__last/main/datas.json")
        .then((response) => {
          var obj = response.data.data;
          const timeData = ["11:00 - 20:00", "10:00 - 21:00", "12:00 - 20:00", "11:00 - 19:00", "09:00 - 21:00"];
          const rateData = [3.5, 4, 4.5, 5];

          // 한국음식
          const tagDataKo = [
            { name: "김치찌개", price: "7,000" },
            { name: "된장찌개", price: "8,000" },
            { name: "순두부찌개", price: "8,000" },
            { name: "제육볶음", price: "10,000" },
            { name: "김치전", price: "8,500" },
            { name: "파전", price: "8,000" },
            { name: "콩비지찌개", price: "9,000" },
            { name: "잡채", price: "8,000" },
          ];
          const foodImgKo = [
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDdfOTAg%2FMDAxNjY1MTA2ODI4NDg0.nd_vA1vMRBn5vCuf1C0jMkus8NkvVqs32gZkwmORgE0g.hxYk3To97YblAmxQ6SE_AIaqKomkYbCQiF_SAG8v8c0g.JPEG.402photostudio%2F220725_0145_L.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjNfMjcw%2FMDAxNjYzOTE1NDIzNzk1.LBZBcH90ac2ITDtT8n-M_HSIqClLhiUlsFGDUiLzQaog.tlw_h0i_pQAH28ZK0NXir2tA4PsabDXG1dMg6fNKelEg.JPEG.all_interior%2FKakaoTalk_20220923_142538893.jpg&type=sc960_832",
            "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/22/dailylife/20210522160943130czyo.jpg",
            "https://sjnfzdfjrjgl1655541.cdn.ntruss.com/goods/3/2020/08/478_tmp_cf5c67bd8633af7be82b1aa9844da3690347view.jpg",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMTJfMTAx%2FMDAxNjY1NTYzNTExOTg0.dQUbVJhAhye8E-0SOYxbNQJoQbrvGWhDRE8ckUfGgV8g.emaVx0G0t7pqLgijmSlB646B6sHIcRFpLDDTJUbW4Ksg.JPEG.bekhk%2FDSCF8157.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MzBfMTg2%2FMDAxNjYxODIxOTIzNzE5.wKUiA_y3KmM5jFXkcWL-QN03AiTb9VOeo-zYft73t54g.CrZqXdJVY0PKxb78Z8YlWLkCzOr2u1wHlbDe910gH1Yg.JPEG.goforitseon%2FBDR07815.JPG&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDJfMzgg%2FMDAxNjY0NjkyMzUxNjUw.pT25EZIrLwYdEx6VBe8nWMCcBiK4IBs5hrSh3g6c7mcg.lsJ4yrgNJwO617ZB7GinQp9i8fx3fw9Ehg0Tft3gSrcg.JPEG.saengyan%2FIMG_1079.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MTNfMTYw%2FMDAxNjU1MTA1MjE1NTIy.0TC1k8cW-t2LdXuJ8E5mOQKRGU6XAU4M2g_KW8MGgpUg.2enMnGg4ytcocGKh99PtygXBIrl7DYUZ4fh8iD88_0kg.JPEG.petmaru0100%2F20220610%25A3%25DF141452.jpg&type=sc960_832",
          ];

          //중식
          const tagDataCh = [
            { name: "마라탕", price: "9,900" },
            { name: "지삼선", price: "12,000" },
            { name: "마파두부", price: "8,000" },
            { name: "싼라펀", price: "8,000" },
            { name: "꿔바로우", price: "13,000" },
            { name: "미씨엔", price: "9,000" },
            { name: "카오렁미엔", price: "7,000" },
            { name: "우육면", price: "9,000" },
          ];
          const foodImgCh = [
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjZfMTUx%2FMDAxNjIyMDAyMTY3OTEy.v-h36YMP31OjysLQwfawqPKEAugMPM7kz2b52CXcpysg.8RYiXU_EqbaR90pqg7Jcc2pN9ztYQ_boycWQlBwkAVgg.JPEG.soulgsoulg%2FKakaoTalk_20210526_102015601_11.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjRfMjIw%2FMDAxNjYzOTQ4NzYxMDk1.uUkYUo3H-xhoSG4uOYsEanI-a2ecO5LEi-UmRdb3rCkg.9y5DPGhrdE3yUJ47Naoyyahso0Ndfk4SVW7RvaLoQl0g.JPEG.eksql3657%2F1663948754064.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDRfMTcg%2FMDAxNjQ5MDU1MDc2NDI0.mmMOhQX8nl80Q-Lnw8E-s9YIhr5HDOvhC-Q1F1db2vEg.am8qViOaQ5eer6wPyVS6jibsxtEvEBkids1HQB8LKbcg.JPEG.amin0831%2FIMG_0163.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDFfMTA0%2FMDAxNjY0NjA3NzcyMDc4._n34pDvmNKw2_GCY0fIO1vWMSh1kvi69VOX-Nx65luQg.tOu2OBbZ8oRVxJaWvTZbgmIEbMvnpgG35rbJqhNaATMg.JPEG.lwm1758%2Foutput_4218814710.jpg&type=sc960_832",
            "https://post-phinf.pstatic.net/MjAxODExMjJfMTc3/MDAxNTQyODU0NDU0MDE5.Nfv1xUOnVIRkeF7DqtgfLknbhis5zjFWCyMd9YiKJkQg.suievJoqNbFSogXWPu_MIAIKUs2yHHmtmubiZaESBbQg.JPEG/China-Food-Reco-Travel-Hotels.com-4.jpg?type=w1200",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MDlfMjcx%2FMDAxNTY3OTU4MDg0NTc5.z6tI-XohyuImduYOYCoO-SXs47UftdJaAnkxiQZ0QaEg.pvTHo4ESHmRgacHsKxy9tlTgx3ZnktiXAPfjZcY6h0Ig.JPEG.bach1060%2F%25C5%25A9%25B1%25E2%25BA%25AF%25C8%25AF20190828_203855.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160707_131%2Fsweekend87_1467898355278TOnTs_JPEG%2F20160702_140959.jpg&type=sc960_832",
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDNfNSAg%2FMDAxNjY0ODA0NTEzOTEz.2LboDOFJ-lYSbBa5e2TjG3IPAqKCsI4HhAFT0B2YjoUg.-7oBfLF-vvRO3Dk2MyVTpjrgx6_I-I_YQkwQGpZ9GAsg.JPEG.hts3812%2F20221003%25A3%25DF132653.jpg&type=sc960_832",
          ];

          //일식
          const tagDataJp = [
            { name: "연어 초밥", price: "12,000" },
            { name: "모듬 초밥", price: "17,000" },
            { name: "참치 초밥", price: "15,000" },
            { name: "연어 사시미", price: "12,000" },
            { name: "광어 사시미", price: "13,000" },
            { name: "모듬 사시미", price: "21,000" },
            { name: "카이센동", price: "17,000" },
            { name: "연어동", price: "12,000" },
          ];
          const foodImgJp = [
            "https://recipe1.ezmember.co.kr/cache/recipe/2015/08/20/81657b7270949de3f2e98feb9b5522651.jpg",
            "https://image.여기유.com/content_place_info/2021110319102316359342232817.jpg",
            "https://imagescdn.gettyimagesbank.com/500/201709/jv10996009.jpg",
            "http://www.sk5.co.kr/img_src/s600/1227//12272242.jpg",
            "https://t1.daumcdn.net/cfile/tistory/99ED2C435DB02FDB1A",
            "https://mblogthumb-phinf.pstatic.net/MjAxODA1MDNfMTkg/MDAxNTI1MzM5MTI0NzEz.WakwYFMVbXQwjv8-k8UuDv_g-njVq-L_2qgIWuOUtE4g.CoNIBDiPIU6mJDvbO45EULLAaTCZ0WtgBlYO6k2qQxog.JPEG.bingo0491/IMG_0896.jpg?type=w800",
            "https://img.insight.co.kr/static/2019/08/01/700/84h6yncso2x016weze6e.jpg",
            "https://mblogthumb-phinf.pstatic.net/MjAxODA0MDVfMjYw/MDAxNTIyOTM5NDU3NzIy.k24Do9Gjj6E8FpW_2l2sh7jsySN0Cz_uZoJJe2Bj-5cg.ry4C-kxdC-uTd2Cytxj3JnH1z2dZ38_n_gXZh112NaEg.JPEG.eastcong/BandPhoto_2018_04_05_23_27_10.jpg?type=w800",
          ];

          //양식
          const tagDataGb = [
            { name: "팟타이", price: "12,000" },
            { name: "쌀국수", price: "12,000" },
            { name: "분짜", price: "15,000" },
            { name: "쏨땀", price: "12,000" },
            { name: "매운쌀국수", price: "13,000" },
            { name: "곱창쌀국수", price: "13,000" },
            { name: "커리덮밥", price: "11,000" },
            { name: "탄두리치킨", price: "21,000" },
          ];
          const foodImgGb = [
            "https://post-phinf.pstatic.net/MjAyMTA0MjdfMjE4/MDAxNjE5NTA4ODIyNjc5.W_ZccGoS5rBzav9Fjo2aO8nsWP02Eyhf8GcJ2tZmn30g.JeR1DXopheou95d4XK8UJi_qrYBdakZTIBicI5arXP8g.JPEG/0.jpg?type=w1200",
            "https://img.insight.co.kr/static/2019/05/08/700/3iq6hcxi07zwq1jco672.jpg",
            "https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/558/76869e84936143ef90f404b62c81c63f20180327102629",
            "https://file2.nocutnews.co.kr/newsroom/image/2018/06/08/20180608072916866618_0_1100_1100.jpg",
            "https://static.megamart.com/product/image/1332/13327903/13327903_1_960.jpg",
            "https://t1.daumcdn.net/cfile/tistory/2165FA42543FAEE61E",
            "https://recipe1.ezmember.co.kr/cache/recipe/2021/08/22/33fef69beb75faf7bf6e3c9ce0a9a6d31.jpg",
            "https://recipe1.ezmember.co.kr/cache/board/2013/01/08/e59437a6dea2abb65bac32432d0467a2.jpg",
          ];

          //패스트푸드
          const tagDataFa = [
            { name: "양념치킨", price: "17,000" },
            { name: "후라이드치킨", price: "16,000" },
            { name: "치킨버거", price: "7,000" },
            { name: "제로콜라", price: "2,000" },
            { name: "간장치킨", price: "17,000" },
            { name: "갈릭치킨", price: "17,000" },
            { name: "반반치킨", price: "18,000" },
            { name: "핫도그", price: "3,500" },
          ];
          const foodImgFa = [
            "https://image.hmall.com/static/7/5/40/61/2061405799_0.jpg?RS=600x600&AR=0",
            "https://img-cf.kurly.com/shop/data/goodsview/20210621/gv10000194890_1.jpg",
            "https://blog.kakaocdn.net/dn/WSAlo/btqB2HYYaLJ/kxKBDHnoyPT4RbWTcvz9B0/img.jpg",
            "https://barunchicken.com/wp-content/uploads/2021/04/%EB%B0%98%EB%B0%98%EC%B9%98%ED%82%A8.jpg",
            "https://img-cf.kurly.com/shop/data/goodsview/20220314/gv30000288754_1.jpg",
            "https://t1.daumcdn.net/cfile/tistory/992B733E5ED510F931",
            "https://d12zq4w4guyljn.cloudfront.net/20220424110514276_photo_c563abc1f59a.jpg",
            "https://blog.kakaocdn.net/dn/3sb3Q/btrskuNKbae/5Sp3V3UPJ7k4KdkCoz2No0/img.jpg",
          ];

          //데이터 담을 공간
          var tagEmpData = []; //태그
          var imgEmpData = []; //이미지

          //태그 데이터 랜덤 추출
          for (let i = 0; i < obj.length; i++) {
            //한식
            if (obj[i].title == "한식") {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < 20; i++) {
                tagEmpData.push(tagDataKo[Math.floor(Math.random() * tagDataKo.length)]);
                imgEmpData.push(foodImgKo[Math.floor(Math.random() * foodImgKo.length)]);
              }
              this.koreanFood.push({
                title: "한식", //음식종류
                name: obj[i].name, //이름
                addr: obj[i].addr, //주소
                region: obj[i].addr.slice(6, 10), //지역구
                hp: obj[i].hp, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgKo[Math.floor(Math.random() * foodImgKo.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                //리뷰(날짜, 아이디, 별점, 제목, 내용)
                review: [
                  {
                    userId: "jidsdj11",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.15.",
                    rates: 4,
                  },
                  {
                    userId: "dfghgfdsa22",
                    title: "최고입니다..",
                    content: "대체로 만족 음식은 대체로 깔끔, 양도 많고 다채로움 다만 예약일정 빠듯해서인지 좀 다급하게 음식이 들어오는 느낌은 있음",
                    writeDay: "2022.10.16.",
                    rates: 4.5,
                  },
                  {
                    userId: "werty33",
                    title: "최고입니다..",
                    content: "해우리특정식 먹었어요. 남도한정식이고 가격은 좀 있다고 생각할 수 있지만, 굉장히 다양하게 잘 나오네요",
                    writeDay: "2022.10.17.",
                    rates: 5,
                  },
                  {
                    userId: "sdfghgfd44",
                    title: "최고입니다..",
                    content:
                      "이번에 남자친구랑 기념일이라 좀 특별한 곳 찾다가 회사 근처에 해우리가 생겼길래 와봤어요 신축 건물이라 그런지 그 전 방문했던 매장 보다 더 고급진 느낌이라 좋았어요~ 점심 메뉴도 많아서 담번엔 점심에 방문 해보려구요 ㅎㅎ",
                    writeDay: "2022.10.18.",
                    rates: 4,
                  },
                ],
                id: obj[i].id, //id : 0, 1, 2 ...
                active: 0, // 찜하기
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //중국식
            else if (obj[i].title === "중국식") {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < 20; i++) {
                tagEmpData.push(tagDataCh[Math.floor(Math.random() * tagDataCh.length)]);
                imgEmpData.push(foodImgCh[Math.floor(Math.random() * foodImgCh.length)]);
              }
              this.chineseFood.push({
                title: "중식", //음식종류
                name: obj[i].name, //이름
                addr: obj[i].addr, //주소
                region: obj[i].addr.slice(6, 10), //지역구
                hp: obj[i].hp, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgCh[Math.floor(Math.random() * foodImgCh.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)

                //리뷰(날짜, 아이디, 별점, 제목, 내용)
                review: [
                  {
                    userId: "jidsdj55",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.15.",
                    rates: 4,
                  },
                  {
                    userId: "dfghgfdsa66",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.16.",
                    rates: 4.5,
                  },
                  {
                    userId: "werty77",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.17.",
                    rates: 5,
                  },
                  {
                    userId: "sdfghgfd88",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.18.",
                    rates: 4,
                  },
                ],
                id: obj[i].id, //id : 0, 1, 2 ...
                active: 0, //찜하기
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //일식
            else if (obj[i].title === "일식") {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < 20; i++) {
                tagEmpData.push(tagDataJp[Math.floor(Math.random() * tagDataJp.length)]);
                imgEmpData.push(foodImgJp[Math.floor(Math.random() * foodImgJp.length)]);
              }
              this.japaneseFood.push({
                title: "일식", //음식종류
                name: obj[i].name, //이름
                addr: obj[i].addr, //주소
                region: obj[i].addr.slice(6, 10), //지역구
                hp: obj[i].hp, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgJp[Math.floor(Math.random() * foodImgJp.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: [
                  {
                    userId: "jidsdj99",
                    title: "최고입니다..",
                    content: "저녁은 웨이팅필수!! 평일 7시에 도착해서 1시간 쫌 안되게 들어갔어요 기다릴만한 맛입니다🌝",
                    writeDay: "2022.10.15.",
                    rates: 4,
                  },
                  {
                    userId: "dfghgfdsa00",
                    title: "최고입니다..",
                    content: "예전에 선릉점 가보고 정말 오랜만에 먹었어요! 살도 많고 무엇보다 매운 양념 이 진짜 맛있었어요😋",
                    writeDay: "2022.10.16.",
                    rates: 4.5,
                  },
                  {
                    userId: "werty11",
                    title: "최고입니다..",
                    content: "유튜브에서 보고 궁금했던 곳인데 드디어 먹어봤어요!! 토요일에 오픈 시간 맞춰서 갔는데도 손님들 많 았고 웨이팅 있었어요!! ",
                    writeDay: "2022.10.17.",
                    rates: 5,
                  },
                  {
                    userId: "sdfghgfd12",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.18.",
                    rates: 4,
                  },
                ], //리뷰(날짜, 아이디, 별점, 제목, 내용)
                id: obj[i].id, //id : 0, 1, 2 ...
                active: 0, //찜하기
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //양식
            else if (obj[i].title === "외국음식전문점(인도태국등)") {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < 20; i++) {
                tagEmpData.push(tagDataGb[Math.floor(Math.random() * tagDataGb.length)]);
                imgEmpData.push(foodImgGb[Math.floor(Math.random() * foodImgGb.length)]);
              }
              this.globalFood.push({
                title: "양식", //음식종류
                name: obj[i].name, //이름
                addr: obj[i].addr, //주소
                region: obj[i].addr.slice(6, 10), //지역구
                hp: obj[i].hp, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgGb[Math.floor(Math.random() * foodImgGb.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: [
                  {
                    userId: "jidsdj13",
                    title: "최고입니다..",
                    content: "유튜브 또간집 1등에 비주얼도 맛있어 보여서 다녀 왔는데 정말 맛있었어요..!😋 ",
                    writeDay: "2022.10.15.",
                    rates: 4,
                  },
                  {
                    userId: "dfghgfdsa14",
                    title: "최고입니다..",
                    content:
                      "떡이 크고 엄청 말랑말랑해요! 음식 나오구 3분 뒤에 떡부터 먼저 먹으면 돼요. 끓일수록 국물이 진해져서 감자랑 으깨먹으니 더 맛있어요. ",
                    writeDay: "2022.10.16.",
                    rates: 4.5,
                  },
                  {
                    userId: "werty15",
                    title: "최고입니다..",
                    content: "유튜브에서 보고 궁금했던 곳인데 드디어 먹어봤어요!! 토요일에 오픈 시간 맞춰서 갔는데도 손님들 많 았고 웨이팅 있었어요!! ",
                    writeDay: "2022.10.17.",
                    rates: 5,
                  },
                  {
                    userId: "sdfghgf16",
                    title: "최고입니다..",
                    content: "평일점심엔 2만원에 가성비 짱이고 저녁에는 3명이 서 방문하면 가성비 진짜좋을것같아요.",
                    writeDay: "2022.10.18.",
                    rates: 4,
                  },
                ], //리뷰(날짜, 아이디, 별점, 제목, 내용)
                id: obj[i].id, //id : 0, 1, 2 ...
                active: 0, //찜하기
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }

            //패스트푸드
            else if (obj[i].title === "패스트푸드") {
              // 랜덤 돌려서 빈 배열에 추가
              for (let i = 0; i < 20; i++) {
                tagEmpData.push(tagDataFa[Math.floor(Math.random() * tagDataFa.length)]);
                imgEmpData.push(foodImgFa[Math.floor(Math.random() * foodImgFa.length)]);
              }
              this.fastFood.push({
                title: "패스트푸드", //음식종류
                name: obj[i].name, //이름
                addr: obj[i].addr, //주소
                region: obj[i].addr.slice(6, 10), //지역구
                hp: obj[i].hp, //전화번호
                time: timeData[Math.floor(Math.random() * timeData.length)], //영업 시간
                rates: rateData[Math.floor(Math.random() * rateData.length)], //별점
                menu: [...new Set(tagEmpData)], // 메뉴(이름,가격)
                mainImg: foodImgFa[Math.floor(Math.random() * foodImgFa.length)], //메인이미지(1개)
                subImg: [...new Set(imgEmpData)], //서브이미지(여러개)
                review: [
                  {
                    userId: "jidsdj55",
                    title: "최고입니다..",
                    content:
                      "매장이 넓고 깨끗해서 식사하기 편했어요~ 음식도 따뜻하고 빠르게 나와서 잘 먹었고 계속 돌아다니시 면서 김치리필 해주셔서 편하고 좋았습니다! ",
                    writeDay: "2022.10.15.",
                    rates: 4,
                  },
                  {
                    userId: "dfghgfdsa66",
                    title: "최고입니다..",
                    content: "동네 맛집이에요 ㅎㅎ모든 밑반찬 다 맛있구요 건강해지는 느낌이에요 ㅎㅎ항상 사람 많더라구요 ㅎㅎ",
                    writeDay: "2022.10.16.",
                    rates: 4.5,
                  },
                  {
                    userId: "werty77",
                    title: "최고입니다..",
                    content: "유튜브에서 보고 궁금했던 곳인데 드디어 먹어봤어요!! 토요일에 오픈 시간 맞춰서 갔는데도 손님들 많 았고 웨이팅 있었어요!! ",
                    writeDay: "2022.10.17.",
                    rates: 5,
                  },
                  {
                    userId: "sdfghgfd88",
                    title: "최고입니다..",
                    content: "평일점심엔 2만원에 가성비 짱이고 저녁에는 3명이 서 방문하면 가성비 진짜좋을것같아요.",
                    writeDay: "2022.10.18.",
                    rates: 4,
                  },
                ], //리뷰(날짜, 아이디, 별점, 제목, 내용)
                id: obj[i].id, //id : 0, 1, 2 ...
                active: 0, //찜하기
              });
              // 배열 초기화
              tagEmpData = [];
              imgEmpData = [];
            }
          }

          //데이터 합치기
          this.dataList = this.koreanFood.concat(this.chineseFood, this.japaneseFood, this.globalFood, this.fastFood);

          // store로 데이터 전송
          this.$store.dispatch("setData", this.dataList);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import "@/assets/css/style.css";
@import "@/assets/css/fonts.css";
</style>
