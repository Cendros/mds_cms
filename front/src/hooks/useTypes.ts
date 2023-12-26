import { useEffect, useState } from "react";
import { getTypes } from "../services/api";

const useTypes = () => {
    const [types, setTypes] = useState<Record<any, any> | undefined>(undefined);

    useEffect(() => {
        if (!types)
            fetchTypes();
    }, []);

    const fetchTypes = async () => {
        const types = await getTypes();
        setTypes(types.data ?? []);
    }

    return types;
}

export default useTypes;