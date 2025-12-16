# Quick Start Guide

Get up and running with the component library in 5 minutes!

## 🚀 Installation

```bash
# Install dependencies
npm install

# iOS: Install CocoaPods
bundle install
bundle exec pod install

# Start Metro
npm start

# Run the app
npm run ios     # iOS
npm run android # Android
```

## 📚 Import Components

```typescript
// Import components
import {
  Button,
  Text,
  Input,
  Card,
  Avatar,
  Screen,
  Container,
  Row,
  Column,
} from './src/components';

// Import theme
import {colors, spacing, textStyles} from './src/theme';

// Import hooks
import {useDebounce, useToggle} from './src/hooks';
```

## 🎯 Common Patterns

### 1. Simple Screen

```typescript
import {Screen, Container, Text, Button} from './src/components';

export const MyScreen = () => {
  return (
    <Screen>
      <Container>
        <Text variant="h2">Hello World</Text>
        <Button title="Click Me" onPress={() => alert('Hello!')} />
      </Container>
    </Screen>
  );
};
```

### 2. Form Screen

```typescript
import {Screen, Container, Column, Input, Button} from './src/components';

export const FormScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen scrollable>
      <Container>
        <Column gap={4}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" variant="primary" fullWidth />
        </Column>
      </Container>
    </Screen>
  );
};
```

### 3. List Screen

```typescript
import {Screen, Container, Column, Card, Row, Avatar, Text} from './src/components';

const users = [{id: 1, name: 'John Doe', role: 'Developer'}];

export const ListScreen = () => {
  return (
    <Screen scrollable>
      <Container>
        <Column gap={3}>
          {users.map(user => (
            <Card key={user.id} elevated>
              <Row gap={3} align="center">
                <Avatar name={user.name} size="md" />
                <Column>
                  <Text variant="h6">{user.name}</Text>
                  <Text variant="caption">{user.role}</Text>
                </Column>
              </Row>
            </Card>
          ))}
        </Column>
      </Container>
    </Screen>
  );
};
```

### 4. Custom Styled Component

```typescript
import {View, StyleSheet} from 'react-native';
import {Text} from './src/components';
import {colors, spacing, borderRadius} from './src/theme';

export const CustomCard = () => {
  return (
    <View style={styles.card}>
      <Text variant="h5" color={colors.primary}>
        Custom Component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.secondary,
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
});
```

## 🎨 Using Theme

```typescript
import {colors, spacing, textStyles} from './src/theme';

// In StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing[4],
    gap: spacing[2],
  },
  text: {
    ...textStyles.body,
    color: colors.text.primary,
  },
});

// Inline
<View style={{
  backgroundColor: colors.success,
  padding: spacing[3],
}} />
```

## 🎣 Using Hooks

### Debounce Hook

```typescript
import {useDebounce} from './src/hooks';

const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  // API call only triggers after 500ms of no typing
  searchAPI(debouncedSearch);
}, [debouncedSearch]);
```

### Toggle Hook

```typescript
import {useToggle} from './src/hooks';

const [isVisible, toggleVisible, setVisible] = useToggle(false);

<Button title="Toggle" onPress={toggleVisible} />
<Button title="Show" onPress={() => setVisible(true)} />
{isVisible && <Text>Visible!</Text>}
```

## 🔧 Component Props Cheatsheet

### Button
```typescript
<Button
  title="Text"           // required
  variant="primary"      // primary | secondary | tertiary | outline | ghost
  size="md"              // xs | sm | md | lg | xl
  loading={false}
  disabled={false}
  fullWidth={false}
  icon={<Icon />}
  iconPosition="left"    // left | right
  onPress={() => {}}
/>
```

### Input
```typescript
<Input
  label="Label"
  placeholder="Text"
  value={value}
  onChangeText={setValue}
  error="Error message"
  helperText="Helper"
  size="md"              // xs | sm | md | lg | xl
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  disabled={false}
/>
```

### Text
```typescript
<Text
  variant="body"         // h1-h6 | body | bodySmall | caption | button | link
  color="#000000"
  align="left"           // left | center | right | justify
>
  Content
</Text>
```

### Card
```typescript
<Card
  elevated={true}
  padding={4}            // 0-24
  onPress={() => {}}     // Makes card pressable
>
  Content
</Card>
```

### Avatar
```typescript
<Avatar
  source={{uri: 'url'}}
  name="John Doe"        // Used for initials if no source
  size="md"              // xs | sm | md | lg | xl
  rounded={true}
/>
```

### Row / Column
```typescript
<Row
  gap={2}                // 0-24
  align="center"         // flex-start | center | flex-end | stretch
  justify="space-between" // flex-start | center | flex-end | space-between | space-around | space-evenly
  wrap={false}
>
  Children
</Row>
```

## 📖 Documentation Links

- **[Full Component API](./src/COMPONENTS.md)** - Detailed documentation
- **[Architecture Guide](./ARCHITECTURE.md)** - Project structure
- **[Source Directory](./src/README.md)** - Code organization
- **[Component Structure](./COMPONENT_STRUCTURE.md)** - Implementation details

## 🎯 Next Steps

1. Explore the HomeScreen to see all components in action
2. Create your first screen in `src/screens/`
3. Customize the theme in `src/theme/`
4. Add more components as needed
5. Build your app!

## 💡 Tips

- Use `Screen` as the root of every screen
- Use `Container` for consistent padding
- Use `Row` and `Column` for layouts
- Use the theme system for all colors/spacing
- Import from barrel exports for cleaner code
- Check TypeScript types for prop options

## 🐛 Troubleshooting

**Components not found?**
```typescript
// Make sure you're importing from the right path
import {Button} from './src/components'; // ✅
import {Button} from './components';     // ❌ (unless in src/)
```

**TypeScript errors?**
- Check that all required props are provided
- Hover over components in VS Code to see props
- Read the type errors carefully

**Styling issues?**
- Use the theme system instead of hardcoded values
- Check that spacing keys are valid (0-24)
- Use StyleSheet.create for performance

---

**Happy Building!** 🚀

