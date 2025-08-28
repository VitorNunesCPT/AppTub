import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.base, styles[variant], style]}>
      <Text style={[styles.textBase, styles[`text_${variant}`], textStyle]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.md,
    alignSelf: 'flex-start',
  },
  textBase: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  
  // Variants
  default: {
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  secondary: {
    backgroundColor: theme.colors.secondary.DEFAULT,
  },
  destructive: {
    backgroundColor: theme.colors.danger.DEFAULT,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  
  // Text variants
  text_default: {
    color: '#ffffff',
  },
  text_secondary: {
    color: theme.colors.secondary.foreground,
  },
  text_destructive: {
    color: '#ffffff',
  },
  text_outline: {
    color: theme.colors.foreground,
  },
});