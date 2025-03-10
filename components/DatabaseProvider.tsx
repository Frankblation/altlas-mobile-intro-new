import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import React, { Suspense, useEffect, useState } from "react";
import { View } from "react-native";

//interface DatabaseProviderProps {
//    children: React.ReactNode;
//}

async function loadDatabase() {
    const name = "activities.db";
    const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`; // Fixed typo from "SQlite" to "SQLite"

    const fileInfo = await FileSystem.getInfoAsync(dbPath); // ✅ Fixed syntax: changed `{}` to `()`

    if (!fileInfo.exists) { // ✅ Fixed: Use `!fileInfo.exists` instead of `if (fileInfo.exists)`
        // Create db
        const dbAsset = require("@/assets/" + name);
        const dbUri = Asset.fromModule(dbAsset).uri;

        await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            { intermediates: true }
        );

        await FileSystem.downloadAsync(dbUri, dbPath); // ✅ Fixed incorrect second parameter (should be `dbPath`)
    }
}

function useDb() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        loadDatabase().then(() => setLoaded(true));
    }, []);

    return { loaded };
}

export function DatabaseProvider({ children }: {children: React.ReactNode}) {
    const { loaded } = useDb();

    if (!loaded) {
      return null;
    }

    return (
        <Suspense fallback={<View />}>
          <SQLite.SQLiteProvider useSuspense databaseName="activities.db">
            {children}
          </SQLite.SQLiteProvider>
        </Suspense>
      );
    }
    export default DatabaseProvider;