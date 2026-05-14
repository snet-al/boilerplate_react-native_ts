import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.description}>
        Add feature-specific screens here as the boilerplate grows.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  title: {
    color: '#11181C',
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    color: '#687076',
    fontSize: 16,
    marginTop: 8,
  },
});
