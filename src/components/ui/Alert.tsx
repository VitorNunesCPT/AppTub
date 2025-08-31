import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive';
  style?: ViewStyle;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const Alert: React.FC<AlertProps> = ({ children, variant = 'default', style }) => {
  const variantStyles = {
    default: {
      backgroundColor: theme.colors.info[50],
      borderColor: theme.colors.info[200],
    },
    destructive: {
      backgroundColor: theme.colors.danger[50],
      borderColor: theme.colors.danger[200],
    },
  };

  return (
    <View style={[
      styles.alert,
      variantStyles[variant],
      style
    ]}>
      {children}
    </View>
  );
};

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, style }) => {
  return (
    <Text style={[styles.alertDescription, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  alert: {
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    marginVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
  },
  alertDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    lineHeight: 20,
    flex: 1,
  },
});