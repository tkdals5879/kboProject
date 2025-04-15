import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    teams : [
        { id: 'lg', name: 'LG', logo: './lgLogo.svg', isFavorite: false },
        { id: 'samsung', name: 'SAMSUNG', logo: './samsungLogo.svg', isFavorite: false },
        { id: 'kia', name: 'KIA', logo: './kiaLogo.svg', isFavorite: false },
        { id: 'doosan', name: 'DOOSAN', logo: './doosanLogo.svg', isFavorite: false },
        { id: 'kt', name: 'KT', logo: './ktLogo.svg', isFavorite: false },
        { id: 'ssg', name: 'SSG', logo: './ssgLogo.svg', isFavorite: false },
        { id: 'lotte', name: 'LOTTE', logo: './lotteLogo.svg', isFavorite: false },
        { id: 'kiwoom', name: 'KIWOOM', logo: './kiwoomLogo.svg', isFavorite: false },
        { id: 'hanhwa', name: 'HANHWA', logo: './hanhwaLogo.svg', isFavorite: false },
        { id: 'nc', name: 'NC', logo: './ncLogo.svg' }
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