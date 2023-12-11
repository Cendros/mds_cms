import { useEffect, useState } from "react";
import { getHome } from "../services/pages";

const useHome = () => {
    const [home, setHome] = useState<Record<any, any> | undefined>(undefined);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const res = await getHome();
        setHome(res?.data?.attributes);
    }

    return home;
}

export default useHome;