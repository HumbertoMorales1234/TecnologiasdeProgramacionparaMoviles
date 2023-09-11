import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import { LIGHTTHEME as THEME } from '../../theme/COLORS';

export const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Remember me</Text>
        <Switch
        trackColor={{false: THEME.COLORS.BROWN.LIGHT, true: THEME.COLORS.ORANGE.LIGHT}}
        thumbColor={isEnabled ? THEME.COLORS.ORANGE.STRONG : THEME.COLORS.BROWN.DARK}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '150%'
  },
  title:{
    fontSize: 15,
    color: THEME.COLORS.GRAY.DARK
  }
});