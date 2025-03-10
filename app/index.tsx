import { Alert, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native"
import { styles } from "@/lib/Constants";
import { Link, router } from "expo-router";
import { DatabaseProvider } from "@/components/DatabaseProvider";
import { useActivities } from "@/hooks/useActivities";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  const { activities } = useActivities();

  return (
      <DatabaseProvider>
          <View style={styles.container}>
            <View stlye ={styles.list}>
          <FlashList
                  renderItem={({ item }) => (
          <Acti vity steps={item.steps} date={item.date} id={item.id} />
        )}
        data={activities}
        estimatedItemSize={50}
      />
      </View>
              <Text style={styles.heading}>{JSON.stringify(activities)}.</Text>
              <Link style={styles.button} href={'/add-activity-screen'}>
                  <Text style={styles.buttonText}>Add Activity</Text>
              </Link>
          </View>
      </DatabaseProvider>
  );
}

const styles = StyleSheet.create({

  list: {


  }
)};