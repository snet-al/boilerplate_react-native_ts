import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@/components/ui';
import { clearCredentials } from '@/store/redux/slices/auth';
import { useAppDispatch, useAppSelector } from '@/store';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome{user?.name ? `, ${user.name}` : ''}</Text>
        <Text style={styles.subtitle}>Start building your Expo app here.</Text>
        <Button title="Logout" variant="secondary" onPress={() => dispatch(clearCredentials())} />
      </View>
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
  card: {
    gap: 16,
  },
  title: {
    color: '#11181C',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#687076',
    fontSize: 16,
  },
});
