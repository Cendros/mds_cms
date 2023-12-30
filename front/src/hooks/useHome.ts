import { useEffect, useState } from "react";
import { getHome } from "../services/api";

const useHome = () => {
    const [home, setHome] = useState<Record<any, any> | undefined>(undefined);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const res = await getHome();
        if (res?.error)
            setError(true);

        setHome(res?.data?.attributes);
    }

    return {
        home,
        error
    };
}

export default useHome;