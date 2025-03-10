import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "@/lib/Constants";
import { Link, router } from "expo-router";
import DatabaseProvider from "@/components/DatabaseProvider";
import { useActivities } from "@/components/useActivities";
export default function Index() {
  const { activities } = useActivities();

  return (
      <DatabaseProvider>
          <View style={styles.container}>
              <Text style={styles.heading}>{JSON.stringify(activities)}.</Text>
              <Link style={styles.button} href={'/add-activity-screen'}>
                  <Text style={styles.buttonText}>Add Activity</Text>
              </Link>
          </View>
      </DatabaseProvider>
  );
}
