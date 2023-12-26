import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";

const useRecipes = () => {
    const [recipes, setRecipes] = useState<Array<Record<any, any>> | undefined>(undefined);

    useEffect(() => {
        if (!recipes)
            fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        if (!recipes) {
            const res = await getRecipes();
            setRecipes(res.data ?? []);
        }
    }

    return recipes;
}

export default useRecipes;