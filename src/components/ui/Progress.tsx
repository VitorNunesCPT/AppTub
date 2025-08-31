import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface ProgressProps {
  value: number; // 0-100
  style?: ViewStyle;
  color?: string;
  backgroundColor?: string;
  height?: number;
}

export const Progress: React.FC<ProgressProps> = ({ 
  value, 
  style, 
  color = theme.colors.primary.DEFAULT, 
  backgroundColor = theme.colors.muted.DEFAULT,
  height = 8
}) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <View style={[
      styles.container, 
      { backgroundColor, height, borderRadius: height / 2 }, 
      style
    ]}>
      <View 
        style={[
          styles.fill, 
          { 
            width: `${clampedValue}%`, 
            backgroundColor: color,
            borderRadius: height / 2
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});