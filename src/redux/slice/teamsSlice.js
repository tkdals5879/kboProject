import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    teams : [
        { id: 'lg', name: 'LG', logo: '/lgLogo.svg', add: '서울,잠실', stadiumName: '서울 종합운동장', homeTeam: 'LG 트윈스', stadiumOpen: '1982년 개장', isFavorite: false },
        { id: 'samsung', name: 'SAMSUNG', logo: '/samsungLogo.svg', add: '대구', stadiumName: '라이온즈파크', homeTeam: '삼성 라이온즈', stadiumOpen: '2016년 개장', isFavorite: false },
        { id: 'kia', name: 'KIA', logo: '/kiaLogo.svg', add: '광주', stadiumName: '챔피언스 필드', homeTeam: '기아 타이거즈', stadiumOpen: '2014년 개장', isFavorite: false },
        { id: 'doosan', name: 'DOOSAN', logo: '/doosanLogo.svg', add: '서울,잠실', stadiumName: '서울 종합운동장', homeTeam: '두산 베어스', stadiumOpen: '1982년 개장', isFavorite: false },
        { id: 'kt', name: 'KT', logo: '/ktLogo.svg', add: '수원', stadiumName: 'KT 위즈파크', homeTeam: 'KT 위즈', stadiumOpen: '1989년 개장', isFavorite: false },
        { id: 'ssg', name: 'SSG', logo: '/ssgLogo.svg', add: '인천', stadiumName: 'SSG랜더스필드', homeTeam: 'SSG 랜더스', stadiumOpen: '2002년 개장', isFavorite: false },
        { id: 'lotte', name: 'LOTTE', logo: '/lotteLogo.svg', add: '부산', stadiumName: '사직 야구장', homeTeam: '롯데 자이언츠', stadiumOpen: '1985년 개장', isFavorite: false },
        { id: 'kiwoom', name: 'KIWOOM', logo: '/kiwoomLogo.svg', add: '서울,구로', stadiumName: '고척 스카이돔', homeTeam: '키움 히어로즈', stadiumOpen: '2015년 개장', isFavorite: false },
        { id: 'hanhwa', name: 'HANHWA', logo: '/hanhwaLogo.svg', add: '대전', stadiumName: '한화생명 볼파크', homeTeam: '한화 이글스', stadiumOpen: '2025년 개장', isFavorite: false },
        { id: 'nc', name: 'NC', logo: '/ncLogo.svg', add: '창원', stadiumName: 'NC파크', homeTeam: 'NC 다이노스', stadiumOpen: '2019년 개장', isFavorite: false }
    ],
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        toggleFavorite(state,action) {
            const teamId = action.payload

            const alreadyFav = state.teams.some(team => team.isFavorite)
            const clickedteam = state.teams.find(team => team.id === teamId)

            if(alreadyFav && !clickedteam.isFavorite){
                alert("하나의 팀만 응원할 수 있습니다!");
                return ;
            }

            state.teams.forEach(team => {
                if (team.id === teamId) {
                  team.isFavorite = !team.isFavorite;
                }
              });

        },
    }
});

export const { toggleFavorite } = teamsSlice.actions;
export default teamsSlice.reducer;