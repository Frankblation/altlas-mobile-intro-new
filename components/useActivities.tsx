import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";

type Activity = {
    id: number;
    steps: number;
    date: number;
};

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const db = useSQLiteContext();

    async function getActivities() {
        if (!db) {
            console.error("Database context is undefined.");
            return [];
        }

        try {
            const data = await db.getAllAsync<Activity>("SELECT * FROM activities");
            return data;
        } catch (error) {
            console.error("Error fetching activities:", error);
            return [];
        }
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getActivities();
            setActivities(data);
        }
        fetchData();
    }, []);

    return { getActivities, activities };
}
