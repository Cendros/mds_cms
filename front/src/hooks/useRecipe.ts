import { useState } from "react";
import { getRecipe } from "../services/api";

const useRecipe = () => {
    const [recipe, setRecipe] = useState<Record<any, any> | undefined>(undefined);

    const fetchRecipe = async (id: number) => {
        const res = await getRecipe(id);
        setRecipe({id: res?.data?.id, ...res?.data?.attributes});
    }

    return { recipe, fetchRecipe };
}

export default useRecipe;