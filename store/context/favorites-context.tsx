import React, { createContext, PropsWithChildren, useState } from "react";

// type

type FavoritesContextType = {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
};

// context
export const FavoritesContext = createContext<FavoritesContextType>({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});




export default function FavoritesContextProvider({ children }: PropsWithChildren) {


    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setFavoriteIds((currentFavIds): string[] => [...currentFavIds, id]);
    }
    const removeFavorite = (id: string) => {
        setFavoriteIds((currentFavIds): string[] => [...currentFavIds.filter((mealId) => mealId !== id)]);
    }
    // waarde
    const value: FavoritesContextType = {
        ids: favoriteIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider
        value={value}>{children}
    </FavoritesContext.Provider>
}
